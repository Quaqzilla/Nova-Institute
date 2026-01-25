import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Link } from "react-router-dom"
import { useState } from "react"
import { createUserWithEmailAndPassword, updateProfile, sendEmailVerification } from "firebase/auth"
import { auth } from "../../firebase"
import img from "../assets/Images/Sign.webp"
import { useNavigate } from "react-router-dom"

export function SignupForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [name, setName] = useState("")
  const [surname, setSurname] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    if (password !== confirmPassword) {
      setError("Passwords do not match")
      return
    }
    setLoading(true)
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password)
      // Update display name
      await updateProfile(userCredential.user, {
        displayName: `${name} ${surname}`
      })
      // Signup successful, you can redirect or update state here
      await sendEmailVerification(userCredential.user)
      navigate('/Login')
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="overflow-hidden p-0">
        <CardContent className="grid p-0 md:grid-cols-2">
          <form className="p-6 md:p-8" onSubmit={handleSubmit}>
            <FieldGroup>
              <div className="flex flex-col items-center gap-2 text-center">
                <h1 className="text-2xl font-bold">Create your account</h1>
                <p className="text-muted-foreground text-sm text-balance">
                  Enter your details below to create your account
                </p>
              </div>
              {error && <p className="text-red-500">{error}</p>}
              <Field className="grid grid-cols-2 gap-4">

                <Field>
                  <FieldLabel htmlFor="name">Name</FieldLabel>
                  <Input
                  id="name"
                  type="text"
                  placeholder="Joe"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  />
                </Field>

                <Field>
                  <FieldLabel htmlFor="surname">Surname</FieldLabel>
                  <Input
                  id="surname"
                  type="text"
                  placeholder="Smiths"
                  required
                  value={surname}
                  onChange={(e) => setSurname(e.target.value)}
                  />
                </Field>

              </Field>

              <Field>
                <FieldLabel htmlFor="phoneNumber">Phone Number</FieldLabel>
                <Input
                  id="phoneNumber"
                  type="tel"
                  placeholder="0123456789"
                  required
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </Field>

              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <FieldDescription>
                  We&apos;ll use this to contact you. We will not share your
                  email with anyone else.
                </FieldDescription>
              </Field>
              <Field>
                <Field className="grid grid-cols-2 gap-4">
                  <Field>
                    <FieldLabel htmlFor="password">Password</FieldLabel>
                    <Input 
                      id="password" 
                      type="password" 
                      required 
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="confirm-password">
                      Confirm Password
                    </FieldLabel>
                    <Input 
                      id="confirm-password" 
                      type="password" 
                      required 
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </Field>
                </Field>
                <FieldDescription>
                  Must be at least 8 characters long.
                </FieldDescription>
              </Field>
              <Field>
                <Button type="submit" disabled={loading}>
                  {loading ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Creating Account...
                    </div>
                  ) : (
                    "Create Account"
                  )}
                </Button>
              </Field>
              
              <FieldDescription className="text-center">
                Already have an account? <Link to="/Login">Sign in</Link>
              </FieldDescription>
            </FieldGroup>
          </form>
          <div className="bg-muted relative hidden md:block">
            <img
              src={img}
              alt="Image"
              className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
            />
          </div>
        </CardContent>
      </Card>
      <FieldDescription className="px-6 text-center text-black">
        By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
        and <a href="#">Privacy Policy</a>.
      </FieldDescription>
    </div>
  )
}
