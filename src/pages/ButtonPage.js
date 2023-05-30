import Button from "../components/Button"
import { GoBell, GoCloudDownload, GoDatabase } from "react-icons/go"

function ButtonPage() {
  const handleClick = () => {
    console.log("clicked")
  }
  return (
    <div>
      <div>
        <Button secondary outline rounded className="mb-5" onClick={handleClick}>
          <GoBell />
          Click Me!!
        </Button>
      </div>
      <div>
        <Button danger outline onMouseEnter={handleClick}>
          <GoCloudDownload />
          Buy Now!
        </Button>
      </div>
      <div>
        <Button warning onMouseLeave={handleClick}>
          <GoDatabase />
          See Deal!
        </Button>
      </div>
      <div>
        <Button success outline>
          Hide Ads!
        </Button>
      </div>
      <div>
        <Button primary rounded>
          Something!
        </Button>
      </div>
    </div>
  )
}
export default ButtonPage
