import { Card, CardBody } from "reactstrap"
import './Rules.css'


const Rule = () => {
    return (
        <div className="rule">
            <h1 className="poster">RULES</h1>
            <div className="para">
                <p>
                    THE FENCING ASSOCIATION OF INDIA (FAI) FOLLOW THE RULES OF THE SPORT & COMPETITION FORMULATED BY THE INTERNATIONAL FENCING FEDERATION (FIE), AS APPLICABLE IN NATIONAL COMPETITIONS.
                </p>
            </div>
            <div className="box">
                <Card className="w-50">
                    <CardBody className="bg">
                        <a href="https://www.fencingindia.org/wp-content/uploads/2023/02/Material-Rules-2022.pdf"><img src="../image/pdf.png"/></a>
                        <h3>Technical Rules</h3>
                        <hr/>
                        <p>Nov 2022</p>
                    </CardBody>
                </Card>
                <Card className="w-50">
                    <CardBody className="bg">
                    <a href="https://www.fencingindia.org/wp-content/uploads/2023/02/Material-Rules-2022.pdf"><img src="../image/pdf.png"/></a>

                        <h3>Material Rules</h3>
                        <hr/>
                        <p>Nov 2022</p>
                    </CardBody>
                </Card>
                <Card className="w-50">
                    <CardBody className="bg">
                    <a href="https://www.fencingindia.org/wp-content/uploads/2023/02/Organisation-Rules-2022.pdf"><img src="../image/pdf.png"/></a>

                        <h3>Organisation Rules</h3>
                        <hr/>
                        <p>Nov 2022</p>
                    </CardBody>
                </Card>
            </div>
        </div>

    )
}
export default Rule;