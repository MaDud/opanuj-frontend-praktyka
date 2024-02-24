import { LabelProps } from "./Label.types"

export const Label = ({label, children}: LabelProps) => {
    return (
        <label className="flex flex-col">
        {label}
        {children}
      </label>
    )
}
