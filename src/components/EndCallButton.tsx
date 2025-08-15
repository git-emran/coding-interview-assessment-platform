import { Button } from "./ui/button"

function EndCallButton() {
  return (
    <Button variant={"destructive"} onClick={endCall}>End Meeting</Button>
  )
}

export default EndCallButton
