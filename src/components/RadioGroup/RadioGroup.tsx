import styled from 'styled-components'
import { Legend } from '../RadioGroup/styles'
import { IInputGroup, IOption, IOption2 } from '../../types/types'
import RadioButton from '../RadioButton/RadioButton'

const Fieldset = styled.fieldset`
    border: none;
`

const Wrapper = styled.div`
    padding: 0.5rem;
    display: grid;
    gap: 1rem;
`

const RadioButtonGroup = ({
    label,
    catagory,
    options,
    onChange,
}: IInputGroup) => {
    function renderOptions() {
        return options.map(({ id, name, disabled, child }: IOption, index) => {
            const numberToString = String(id)
            const shortenedOptionLabel = numberToString.replace(/\s+/g, '')
            const optionId = `radio-option-${shortenedOptionLabel}`
            const hadChild = child ? true : false
            return (
                <>
                    <RadioButton
                        value={id}
                        label={name}
                        key={optionId}
                        id={optionId}
                        name={catagory}
                        disabled={disabled}
                        defaultChecked={index === 0}
                        onChange={onChange}
                    />

                    {hadChild &&
                        child?.map(
                            (
                                { id, title, disabled, child }: IOption2,
                                index
                            ) => {
                                const numberToString = String(id)
                                const shortenedOptionLabel =
                                    numberToString.replace(/\s+/g, '')
                                const optionId = `radio-option-${shortenedOptionLabel}`
                                return (
                                    <>
                                        <RadioButton
                                            value={id}
                                            label={title}
                                            key={optionId}
                                            id={optionId}
                                            style={{ marginLeft: '80px' }}
                                            name={catagory}
                                            disabled={disabled}
                                            defaultChecked={index === 0}
                                        />
                                    </>
                                )
                            }
                        )}
                </>
            )
        })
    }
    return (
        <Fieldset>
            <Legend>{label}</Legend>
            <Wrapper>{renderOptions()}</Wrapper>
        </Fieldset>
    )
}
export default RadioButtonGroup
