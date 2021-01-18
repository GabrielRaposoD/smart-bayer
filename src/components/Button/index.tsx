// Modules Import
import cs from 'clsx'

enum ButtonState {
  normal = 'normal',
  disabled = 'disabled',
  inverse = 'inverse',
}

interface ButtonProps {
  title: string
  state: ButtonState
}

const Button: React.FC<ButtonProps> = ({ title, state }) => {
  return (
    <button
      className={cs('w-full rounded-full py-2 text-xl font-medium', {
        'border border-primary border-solid bg-primary text-white': state === ButtonState.normal,
        'border border-gray-200 border-solid bg-gray-200 text-gray-700': state === ButtonState.disabled,
        'border border-primary border-solid text-primary': state === ButtonState.inverse,
      })}
    >
      {title}
    </button>
  )
}

export { Button }
