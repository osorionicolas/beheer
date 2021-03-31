import jsonRestProvider from "ra-data-fakerest"
import { GET_ONE, UPDATE } from "react-admin"
import data from "./data"

const disableFakeFetchRequestsLogs = true;

// A function decorating a dataProvider for handling user profiles
const handleUserProfile = dataProvider => (verb, resource, params) => {
  // I know I only GET or UPDATE the profile as there is only one for the current user
  // To showcase how I can do something completely different here, I'll store it in local storage
  // You can replace this with a customized fetch call to your own API route, too
  if (resource === "profile") {
    if (verb === GET_ONE) {
      const storedProfile = localStorage.getItem("profile")

      if (storedProfile) {
        return Promise.resolve({
          data: JSON.parse(storedProfile),
        })
      }

      // No profile yet, return a default one
      // It's important that I send the same id as requested in params.
      // Indeed, react-admin will verify it and may throw an error if they are different
      // I don't have to do it when the profile exists as it will be included in the data stored in the local storage
      return Promise.resolve({
        data: { id: params.id, nickname: "" },
      })
    }

    if (verb === UPDATE) {
      localStorage.setItem("profile", JSON.stringify(params.data))
      return Promise.resolve({ data: params.data })
    }
  }

  // Fallback to the dataProvider default handling for all other resources
  return dataProvider(verb, resource, params)
};

export default handleUserProfile(
  jsonRestProvider(data, disableFakeFetchRequestsLogs)
)