import { mapKeyEvent, KEYS } from "shield-input";

import {
  Events,
  CallbackEvents,
  UpdateNavigation,
  Navigation,
} from "./navigation-types-props";

class NavigationHandler {
  limit;

  focusedItem;

  enabled = false;

  rotate;

  eventsToListener: Events;

  limitCallbacks: CallbackEvents;

  onFocusChanged: (focused: number) => void;

  isPressingKey: boolean;

  limitTimeRepeatKeyPressed: number;

  constructor({
    limit = 0,
    initialFocused = 0,
    rotate = false,
    events = {},
    limitCallbacks = {},
    onFocusChanged = () => {},
    limitTimeRepeatKeyPressed = 100,
  }: Navigation) {
    this.focusedItem = initialFocused;
    this.limit = limit;
    this.rotate = rotate;
    this.eventsToListener = events;
    this.limitCallbacks = limitCallbacks;
    this.onFocusChanged = onFocusChanged;
    this.isPressingKey = false;
    this.limitTimeRepeatKeyPressed = limitTimeRepeatKeyPressed;

    this.onKeydown = this.onKeydown.bind(this);
    this.wheelHandler = this.wheelHandler.bind(this);
  }

  update({
    limit,
    rotate,
    events,
    limitCallbacks,
    onFocusChanged,
  }: UpdateNavigation): void {
    if (limit) {
      this.limit = limit;
    }

    if (rotate) {
      this.rotate = rotate;
    }

    if (events) {
      this.eventsToListener = events;
    }

    if (limitCallbacks) {
      this.limitCallbacks = limitCallbacks;
    }

    if (onFocusChanged) {
      this.onFocusChanged = onFocusChanged;
    }
  }

  enable(): void {
    if (this.enabled) return;

    window.addEventListener("keydown", this.onKeydown, true);

    if (
      process.env.REACT_APP_HAS_POINTER &&
      (this.eventsToListener.up || this.eventsToListener.down)
    ) {
      window.addEventListener("wheel", this.wheelHandler, true);
    }

    this.enabled = true;
  }

  disable(): void {
    if (!this.enabled) return;

    window.removeEventListener("keydown", this.onKeydown, true);

    if (
      process.env.REACT_APP_HAS_POINTER &&
      (this.eventsToListener.up || this.eventsToListener.down)
    ) {
      window.removeEventListener("wheel", this.wheelHandler, true);
    }

    this.enabled = false;
  }

  incrementFocusedItem(
    limitCallback: ((focusedItem?: number) => void) | undefined
  ): void {
    const newFocused = this.focusedItem + 1;

    if (newFocused <= this.limit) {
      this.focusedItem = newFocused;
      this.onFocusChanged(this.focusedItem);
    } else if (this.rotate) {
      this.focusedItem = 0;
      this.onFocusChanged(this.focusedItem);
    } else if (limitCallback) {
      limitCallback();
    }
  }

  decrementFocusedItem(limitCallback?: (focusedItem?: number) => void): void {
    const newFocused = this.focusedItem - 1;

    if (newFocused >= 0) {
      this.focusedItem = newFocused;
      this.onFocusChanged(this.focusedItem);
    } else if (this.rotate) {
      this.focusedItem = this.limit;
      this.onFocusChanged(this.focusedItem);
    } else if (limitCallback) {
      limitCallback();
    }
  }

  handleIsPressingKey(): void {
    if (this.limitTimeRepeatKeyPressed) {
      this.isPressingKey = true;

      setTimeout(() => {
        this.isPressingKey = false;
      }, this.limitTimeRepeatKeyPressed);
    }
  }

  onKeydown(e: KeyboardEvent): void | boolean {
    if (this.isPressingKey) return undefined;
    this.handleIsPressingKey();

    const keyName = mapKeyEvent(e);

    const dictionary = {
      [KEYS.NAV_ENTER]: () => {
        this.eventsToListener?.enter?.(this.focusedItem);
      },
      [KEYS.NAV_BACK]: () => {
        e.preventDefault();
        this.eventsToListener?.back?.(this.focusedItem);
        return false;
      },
      [KEYS.NAV_LEFT]: () => {
        if (this.eventsToListener?.left === true) {
          this.decrementFocusedItem(this.limitCallbacks?.left);
        } else if (typeof this.eventsToListener?.left === "function") {
          this.eventsToListener?.left?.(this.focusedItem);
        }
      },
      [KEYS.NAV_UP]: () => {
        if (this.eventsToListener?.up === true) {
          this.decrementFocusedItem(this.limitCallbacks?.up);
        } else if (typeof this.eventsToListener?.up === "function") {
          this.eventsToListener?.up?.(this.focusedItem);
        }
      },
      [KEYS.NAV_DOWN]: () => {
        if (this.eventsToListener?.down === true) {
          this.incrementFocusedItem(this.limitCallbacks?.down);
        } else if (typeof this.eventsToListener?.down === "function") {
          this.eventsToListener?.down?.(this.focusedItem);
        }
      },
      [KEYS.NAV_RIGHT]: () => {
        if (this.eventsToListener?.right === true) {
          this.incrementFocusedItem(this.limitCallbacks?.right);
        } else if (typeof this.eventsToListener?.right === "function") {
          this.eventsToListener?.right?.(this.focusedItem);
        }
      },
    };

    e.stopPropagation();
    return keyName ? dictionary[keyName.indexOf(keyName)]?.() : undefined;
  }

  wheelHandler(event: { deltaY: number }): void {
    if (event.deltaY < 0) {
      this.onKeydown({ code: "ArrowUp", keyCode: 38 } as KeyboardEvent);
    } else if (event.deltaY > 0) {
      this.onKeydown({ code: "ArrowDown", keyCode: 40 } as KeyboardEvent);
    }
  }

  updateFocusedItem(focusedItem: number): void {
    this.focusedItem = focusedItem;
    this.onFocusChanged(focusedItem);
  }
}

export default NavigationHandler;
