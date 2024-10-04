'use client'

import { Button } from "@nextui-org/react"
import { useFormStatus } from "react-dom"

// SubmitButton.tsx     lable or name to be displayed on the button
// @label : string name to be desplayed
/**
 * SubmitButton component renders a button that displays a loading state when a form is pending submission.
 *
 * @component
 * @param {Object} props - The properties object.
 * @param {string} props.label - The label to be displayed on the button.
 * @param {Object} [props.btnProps] - Additional properties to be passed to the Button component.
 * @returns {JSX.Element} The rendered SubmitButton component.
 */
/**
 * SubmitButton component renders a button with a loading state.
 * It uses the `useFormStatus` hook to determine if the form is pending submission.
 *
 * @param {Object} props - The properties object.
 * @param {string} props.label - The label to be displayed on the button.
 * @param {Object} props.btnProps - Additional properties to be passed to the Button component.
 *
 * @returns {JSX.Element} The rendered SubmitButton component.
 */
const SubmitButton = ({label,...btnProps}) => {
const {pending} = useFormStatus()

return <Button {...btnProps} isLoading={pending} type="submit" >
{label}
</Button>
}

export default SubmitButton