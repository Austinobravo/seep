import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import ProfileForm from "../../_components/ProfileForm"

export function AdminTabs({userData}: {userData:UserType}) {
  return (
    <Tabs defaultValue="account" className="">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="permissions">Permissions</TabsTrigger>
        <TabsTrigger value="dates">Important Dates</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card>
          <CardHeader>
            <CardTitle>Account</CardTitle>
            <CardDescription>
              Make changes to your account here. Click save when you're done.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <ProfileForm data={userData}/>

          </CardContent>
          <CardFooter>
            <Button>Save changes</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="permissions">
        <Card>
          <CardHeader>
            <CardTitle>Password</CardTitle>
            <CardDescription>
              Change your password here. After saving, you'll be logged out.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="current">Current password</Label>
              <Input id="current" type="password" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="new">New password</Label>
              <Input id="new" type="password" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save password</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="dates">
        <Card>
          <CardHeader>
            <CardTitle>Important Dates</CardTitle>
            <CardDescription>
              Dates that show clarity.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-7">
            <div className="space-y-1">
              <h3 className="font-bold text-lg">Last Login</h3>
              <p>Februrary, 2, 2025 <span className="text-xs">Today</span></p>
            </div>
            <div className="space-y-1">
              <h3 className="font-bold text-lg">Date Joined</h3>
              <p>Februrary, 1, 2025 <span className="text-xs">Today</span></p>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  )
}
