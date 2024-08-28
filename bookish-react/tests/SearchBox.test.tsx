import {render, screen, fireEvent} from "@testing-library/react";
import {describe, expect, jest} from '@jest/globals';
import SearchBox from "@/app/ui/components/SearchBox";
import {act} from "react";

describe('SearchBox', () => {
  it("Renders input", () => {
    const props = {
      term: "",
      onSearch: jest.fn()
    };
    render(<SearchBox {...props} />);
    const input = screen.getByRole('textbox');
    expect(input).toBeInTheDocument();
  });

  it("Calls onSearch when the input changes", () => {
    const searchBoxValue = "Transformers";
    const props = {
      term: "",
      onSearch: jest.fn()
    };
    render(<SearchBox {...props} />);
    const input = screen.getByRole('textbox');
    act(() => {
      fireEvent.change(input, {target: {value: searchBoxValue}});
    });
    expect(props.onSearch).toHaveBeenCalled();
  });

  it("does not send empty strings to onSearch", () => {
    const props = {
      term: "",
      onSearch: jest.fn()
    };
    render(<SearchBox {...props} />);
    const input = screen.getByRole('textbox');
    fireEvent.change(input, {target: {value: " "}});
    expect(props.onSearch).not.toHaveBeenCalled();
  });
});
