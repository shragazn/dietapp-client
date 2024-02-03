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
const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { handleSubmit, handleChange } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: () => {
      window.localStorage.setItem("access_token", "1234");
      const { from } = location.state || { from: { pathname: "/" } };
      navigate(from);
    },
  });
  return (
    <main className="flex h-screen w-full items-center justify-center">
      <Card>
        <CardHeader>
          <CardTitle>Login</CardTitle>
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
            <div className="flex items-center">
              <Link to="/auth/register">
                <Button variant={"link"}>Register</Button>
              </Link>
              <Typography type="muted">Don't have an account?</Typography>
            </div>
            <Button type="submit">Login</Button>
          </form>
        </CardContent>
      </Card>
    </main>
  );
};

export default Login;
