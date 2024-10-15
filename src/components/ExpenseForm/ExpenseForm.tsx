import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { categories } from "../categories";

const schema = z.object({
  description: z
    .string()
    .min(3, { message: "Descritption should be at least 3 characters" }),
  amount: z.number({ invalid_type_error: "Amount is required" }).min(1),
  category: z.enum(categories, {
    errorMap: () => ({ message: "Category is required." }),
  }),
});

type FormData = z.infer<typeof schema>;

interface Props {
  onSubmit: (data: FormData) => void;
}

const ExpenseForm = ({ onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  return (
    <form
      className="my-4"
      onSubmit={handleSubmit((data) => {
        onSubmit(data);
        reset();
      })}
    >
      <div className="m-2">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input
          {...register("description")}
          id="description"
          type="text"
          className="form-control"
        />
        {errors.description && (
          <p className="text-danger">{errors.description.message}</p>
        )}
      </div>
      <div className="m-2">
        <label htmlFor="amount" className="form-label">
          Amount
        </label>
        <input
          {...register("amount", { valueAsNumber: true })}
          id="amount"
          type="number"
          className="form-control"
        />
        {errors.amount && (
          <p className="text-danger">{errors.amount.message}</p>
        )}
      </div>
      <div className="m-2">
        <label htmlFor="category" className="form-label">
          Category
        </label>
        <select {...register("category")} id="category" className="form-select">
          <option value=""></option>
          <option value="">All categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        {errors.category && (
          <p className="text-danger">{errors.category.message}</p>
        )}
      </div>
      <button className="btn btn-primary m-2" type="submit">
        Submit
      </button>
    </form>
  );
};

export default ExpenseForm;
