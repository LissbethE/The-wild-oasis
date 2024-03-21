import Spinner from "../../ui/Spinner";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";

import { useSettings } from "./useSettings";
import { useUpdateSetting } from "./useUpdateSetting";

//////////////////////////
function UpdateSettingsForm() {
  const {
    settings: {
      minBookingLength,
      maxBookingLength,
      maxGuestsPerBooking,
      breakfastPrice,
    } = {},
    isLoading,
  } = useSettings();

  const { isUpdating, updateSetting } = useUpdateSetting();

  //////////////////////////

  if (isLoading) return <Spinner />;

  function handleBlur(e, field) {
    const { value } = e.target;

    if (!value) return;

    updateSetting({ [field]: value });
  }

  //////////////////////////
  // This time we are using UNCONTROLLED fields, so we will NOT store state
  return (
    <Form>
      <FormRow label="Minimum nights/booking">
        <Input
          type="number"
          disabled={isUpdating}
          defaultValue={minBookingLength}
          // onBlur={(e) => handleBlur(e, "minBookingLength")}
          onBlur={(e) =>
            Number(e.target.value) !== Number(minBookingLength) &&
            handleBlur(e, "minBookingLength")
          }
          id="min-nights"
        />
      </FormRow>

      <FormRow label="Maximum nights/booking">
        <Input
          type="number"
          disabled={isUpdating}
          defaultValue={maxBookingLength}
          // onBlur={(e) => handleBlur(e, "maxBookingLength")}
          onBlur={(e) =>
            Number(e.target.value) !== Number(maxBookingLength) &&
            handleBlur(e, "maxBookingLength")
          }
          id="max-nights"
        />
      </FormRow>

      <FormRow label="Maximum guests/booking">
        <Input
          type="number"
          disabled={isUpdating}
          defaultValue={maxGuestsPerBooking}
          //onBlur={(e) => handleBlur(e, "maxGuestsPerBooking")}
          onBlur={(e) =>
            Number(e.target.value) !== Number(maxGuestsPerBooking) &&
            handleBlur(e, "maxGuestsPerBooking")
          }
          id="max-guests"
        />
      </FormRow>

      <FormRow label="Breakfast price">
        <Input
          type="number"
          disabled={isUpdating}
          defaultValue={breakfastPrice}
          //onBlur={(e) => handleBlur(e, "breakfastPrice")}
          onBlur={(e) =>
            Number(e.target.value) !== Number(breakfastPrice) &&
            handleBlur(e, "breakfastPrice")
          }
          id="breakfast-price"
        />
      </FormRow>
    </Form>
  );
}

export default UpdateSettingsForm;
