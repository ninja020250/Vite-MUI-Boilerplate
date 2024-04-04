// PasswordFormField.stories.ts|tsx
import type { Meta, StoryObj } from "@storybook/react";

import { useForm } from "react-hook-form";
import { Box } from "@mui/material";
import { Button } from "@components/atom";
import { PhoneFormField } from "@components/molecule";

const meta: Meta<typeof PhoneFormField> = {
  component: PhoneFormField,
  title: "Molecule/PhoneFormField",
};
type TFormFields = {
  field?: any;
};

export default meta;
type Story = StoryObj<typeof PhoneFormField>;

const FormWrapper = () => {
  const { control, handleSubmit, reset } = useForm<TFormFields>({
    defaultValues: {
      field: "",
    },
  });

  const onSubmit = (data: TFormFields) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box p={3} bgcolor="gray.100">
        <PhoneFormField
          name="field"
          control={control}
          label="Form field"
          rules={{
            required: {
              value: true,
              message: "This field is required",
            },
          }}
          textFieldProps={{
            placeholder: "Enter your password",
          }}
        />
        <br />
        <Button sx={{ mt: 2, mr: 2 }} variant="outlined" onClick={() => reset({ field: false })}>
          Reset
        </Button>
        <Button sx={{ mt: 2 }} type="submit" variant="contained">
          Submit
        </Button>
      </Box>
    </form>
  );
};

export const form: Story = {
  render: () => <FormWrapper />,
};
