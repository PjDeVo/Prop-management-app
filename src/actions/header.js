import { UPDATE_HEADER } from "./types";

export function updateHeader(title, subtite, hideBar) {
  return {
    type: UPDATE_HEADER,
    payload: { title, subtitle, hideBar }
  };
}
