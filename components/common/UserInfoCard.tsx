import { Card, CardContent } from "../ui/card"
import { Avatar, AvatarImage } from "../ui/avatar"
import { Button } from "../ui/button"
import { Link2 } from "lucide-react"

const UserInfoCard = () => {
    return (
        <>
            <div >
                <div className="mt-14"></div>
                <Card className=" border-0 rounded-none ring-0" >
                    <CardContent className="px-2 flex flex-col">
                        <div className="flex flex-row gap-2 justify-start items-center mb-2">
                            <Avatar>
                                <AvatarImage
                                    src="https://github.com/shadcn.png"
                                    alt="@shadcn"
                                    className=""
                                />
                            </Avatar>
                            <div className="flex flex-col">
                                <p className="font-bold text-primary">imran/reponame</p>

                            </div>
                        </div>
                        <Button variant={"secondary"} >
                            <Link2 />
                            View on Github
                        </Button>
                    </CardContent>
                </Card>
            </div>
        </>
    )
}

export default UserInfoCard