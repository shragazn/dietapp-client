import { useFormik } from "formik";
import * as yup from "yup";
import { Input } from "./input";
import { forwardRef } from "react";
import { Button } from "./button";
import { useTranslation } from "react-i18next";
import { X } from "lucide-react";
import usePlans from "@/mutations/usePlans";

const initialValues = {
  title: "",
  sets: 0,
  reps: 0,
};

const validationSchema = yup.object({
  title: yup.string().required(),
  sets: yup.number().min(1).required(),
  reps: yup.number().min(1).required(),
});

type Props = {
  planId: string;
};

const PlanLiInput = forwardRef<HTMLInputElement, Props>(({ planId }, ref) => {
  const { t } = useTranslation();
  const { addExerciseToPlan } = usePlans(planId);
  const { values, handleChange, handleBlur, handleSubmit } = useFormik({
    onSubmit: (values, actions) => {
      addExerciseToPlan.mutate({
        name: values.title,
        sets: values.sets,
        reps: values.reps,
        planId,
      });
      actions.resetForm();
      (ref as React.MutableRefObject<HTMLInputElement>)?.current?.focus();
    },
    initialValues,
    validationSchema,
  });
  return (
    <li className="rounded-lg bg-primary-foreground p-2 px-4">
      <form
        onSubmit={handleSubmit}
        className="flex items-start justify-between"
      >
        <div>
          <Input
            placeholder={t("exercise name")}
            className="w-32 rounded-none border-x-0 border-b-2 border-t-0 bg-primary-foreground pr-0 text-xl font-semibold tracking-tight focus-visible:ring-0 focus-visible:ring-offset-0"
            id="title"
            value={values.title}
            onChange={handleChange}
            onBlur={handleBlur}
            ref={ref}
          />
          <div className="flex items-center gap-2">
            <Input
              placeholder={t("sets")}
              className="w-10 rounded-none border-x-0 border-b-2 border-t-0 bg-primary-foreground pr-0 text-sm text-muted-foreground focus-visible:ring-0 focus-visible:ring-offset-0"
              id="sets"
              value={values.sets || ""}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <X size={16} className="text-muted-foreground" />
            <Input
              placeholder={t("reps")}
              className="w-12 rounded-none border-x-0 border-b-2 border-t-0 bg-primary-foreground pr-0 text-sm text-muted-foreground focus-visible:ring-0 focus-visible:ring-offset-0"
              id="reps"
              value={values.reps || ""}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
        </div>
        <Button variant={"ghost"} type="submit">
          {t("add")}
        </Button>
      </form>
    </li>
  );
});

export default PlanLiInput;
