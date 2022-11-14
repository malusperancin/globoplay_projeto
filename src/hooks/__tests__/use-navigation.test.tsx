import { act, fireEvent, renderHook } from "@testing-library/react";
import useNavigation from "./../use-navigation";

const simulateKeyDown = (element = window) => {
  fireEvent.keyDown(element, 38);
};

const simulateKeyUp = (element = window) => {
  fireEvent.keyDown(element, 40);
};

const simulateKeyLeft = (element = window) => {
  fireEvent.keyDown(element, 37);
};

const simulateKeyRight = (element = window) => {
  fireEvent.keyDown(element, 39);
};

const simulateKeyEnter = (element = window) => {
  fireEvent.keyDown(element, 13);
};

describe("Use Navigation", () => {
  it("should return DOWN button", async () => {
    const { unmount, result } = renderHook(() => useNavigation());

    act(() => {
      simulateKeyDown();
    });

    expect(result.current).toBe("DOWN");

    unmount();
  });

  it("should return UP button", async () => {
    const { unmount, result } = renderHook(() => useNavigation());

    act(() => {
      simulateKeyUp();
    });

    expect(result.current).toBe("UP");

    unmount();
  });

  it("should return LEFT button", async () => {
    const { unmount, result } = renderHook(() => useNavigation());

    act(() => {
      simulateKeyLeft();
    });

    expect(result.current).toBe("LEFT");

    unmount();
  });

  it("should return RIGHT button", async () => {
    const { unmount, result } = renderHook(() => useNavigation());

    act(() => {
      simulateKeyRight();
    });

    expect(result.current).toBe("RIGHT");

    unmount();
  });

  it("should return ENTER button", async () => {
    const { unmount, result } = renderHook(() => useNavigation());

    act(() => {
      simulateKeyEnter();
    });

    expect(result.current).toBe("ENTER");

    unmount();
  });
});
