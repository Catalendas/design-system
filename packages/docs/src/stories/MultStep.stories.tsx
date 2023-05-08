import { Box, MultStep, MultStepProps } from '@catalendas-ignite-ui/react'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Form/Multstep',
  component: MultStep,
  args: {
    size: 4,
    currentStep: 1,
  },
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<MultStepProps>

export const Primary: StoryObj<MultStepProps> = {}

export const Full: StoryObj<MultStepProps> = {
  args: {
    currentStep: 4,
  }
}
