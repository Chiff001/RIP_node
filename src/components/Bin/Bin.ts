import {Link} from "react-router-dom";
import {Badge, Button} from "reactstrap";

type Props = {
    isActive: boolean,
    draft_company_id: string,
    personalitys_count: number
}

const Bin = ({isActive, draft_company_id, personalitys_count}:Props) => {

    if (!isActive) {
        return <Button color={"secondary"} className="bin-wrapper" disabled>Корзина</Button>
    }

    return (
        <Link to={`/companys/${draft_company_id}/`} className="bin-wrapper">
            <Button color={"primary"} className="w-100 bin">
                Корзина
                <Badge>
                    {personalitys_count}
                </Badge>
            </Button>
        </Link>
    )
}

export default Bin