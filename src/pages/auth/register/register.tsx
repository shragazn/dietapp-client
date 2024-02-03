import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Typography } from "@/components/ui/typography";
import { useFormik } from "formik";
import { useLocation, useNavigate } from "react-router";
import { Link } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { handleSubmit, handleChange, isSubmitting, errors } = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: (values, action) => {
      if (values.password !== values.confirmPassword) {
        action.setFieldError("confirmPassword", "Passwords do not match");
        return;
      }
      window.localStorage.setItem("access_token", "1234");
      const { from } = location.state || { from: { pathname: "/" } };
      navigate(from);
    },
  });
  return (
    <main className="flex h-screen w-full items-center justify-center">
      <Card className="w-72">
        <CardHeader>
          <CardTitle>Register</CardTitle>
          <CardDescription>Enter your credentials</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="grid gap-4" onSubmit={handleSubmit}>
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              name="email"
              id="email"
              onChange={handleChange}
            />
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              name="password"
              id="password"
              onChange={handleChange}
            />
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <Input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              onChange={handleChange}
            />
            <Typography type="muted">{errors.confirmPassword}</Typography>
            <div className="flex items-center">
              <Link to="/auth/login">
                <Button variant={"link"}>Login</Button>
              </Link>
              <Typography type="muted">Already have an account?</Typography>
            </div>
            <Button type="submit" disabled={isSubmitting}>
              Register
            </Button>
          </form>
        </CardContent>
      </Card>
    </main>
  );
};

export default Register;
