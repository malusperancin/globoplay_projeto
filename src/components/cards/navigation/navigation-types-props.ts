export type KeyCallbackProps = {
  event: KeyboardEvent
  isLastItem?: boolean
}

export type NavigationProps = {
  direction: 'vertical' | 'horizontal'
  initialFocus?: number
  isActive?: boolean
  onBack?: ({ event, isLastItem }: KeyCallbackProps) => void
  onDown?: ({ event, isLastItem }: KeyCallbackProps) => void
  onEnter?: ({ event, isLastItem }: KeyCallbackProps) => void
  onLeft?: ({ event, isLastItem }: KeyCallbackProps) => void
  onRight?: ({ event, isLastItem }: KeyCallbackProps) => void
  onUp?: ({ event, isLastItem }: KeyCallbackProps) => void
}

export type Events = {
  enter?: (focusedItem?: number) => void
  back?: (focusedItem?: number) => void
  space?: (focusedItem?: number) => void
  left?: ((focusedItem?: number) => void) | boolean
  up?: ((focusedItem?: number) => void) | boolean
  right?: ((focusedItem?: number) => void) | boolean
  down?: ((focusedItem?: number) => void) | boolean
}

export type CallbackEvents = {
  left?: (focusedItem?: number) => void
  up?: (focusedItem?: number) => void
  right?: (focusedItem?: number) => void
  down?: (focusedItem?: number) => void
}

export type Navigation = {
  onFocusChanged?: (focused: number) => void
  limit?: number
  initialFocused?: number
  rotate?: boolean
  events: Events
  limitCallbacks?: CallbackEvents
  limitTimeRepeatKeyPressed?: number
}

export type UpdateNavigation = {
  onFocusChanged?: (focused: number) => void
  limit?: number
  rotate?: boolean
  events?: Events
  limitCallbacks?: CallbackEvents
}
