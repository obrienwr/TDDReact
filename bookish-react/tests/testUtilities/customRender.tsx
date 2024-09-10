import {Provider} from "react-redux";
import store from "@/app/lib/store";
import mockStore from "@/app/lib/mockStore";
import {render} from "@testing-library/react";
import {ReactElement} from "react";


export default function customRender(component: ReactElement) {
  return {
    ...render(
      <Provider store={store}>
        {component}
      </Provider>
    )
  }
}

export function customRenderMock(component: ReactElement) {
  return {
    ...render(
      <Provider store={mockStore}>
        {component}
      </Provider>
    )
  }
}
