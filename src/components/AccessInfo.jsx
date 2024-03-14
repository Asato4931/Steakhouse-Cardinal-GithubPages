import Col from "react-bootstrap/Col";

import Row from "react-bootstrap/Row";

export default function AccessInfo() {
  return (
    <section className="accessinfo" id="accessinfo">
      <div class="container">
        <Row className="align-items-center">
          <h2 className="accessinfo-title">Access & Info</h2>
          <Col xs={12} md={7}>
            <table>
              <tbody>
                <tr>
                  <th>
                    <p className="label">住所</p>
                  </th>
                  <td>
                    <p>〒163-8001 東京都新宿区西新宿２丁目８−１</p>
                  </td>
                </tr>
                <tr>
                  <th>
                    <p className="label">営業時間</p>
                  </th>
                  <td>
                    <p>
                      月-土 11:00-23:00 <br /> 日・祝 11:00-22:00
                    </p>
                  </td>
                </tr>
                <tr>
                  <th>
                    <p className="label">電話番号</p>
                  </th>
                  <td>
                    <p>XXX-XXXX-XXXX</p>
                  </td>
                </tr>
                <tr>
                  <th>
                    <p className="label">座席</p>
                  </th>
                  <td>
                    <p>90席</p>
                  </td>
                </tr>
                <tr>
                  <th>
                    <p className="label">お支払い方法</p>
                  </th>
                  <td>
                    <p>
                      【クレジットカード】VISA, Master, JCB, AMEX, Diners <br />
                      【電子マネー】Suica, Pasmo
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </Col>
          <Col xs={12} md={5} className="map-column">
            <div className="map-container">
              <iframe
                className="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.4931321160143!2d139.687180188855!3d35.68948070000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188cd4b71a37a1%3A0xf1665c37f38661e8!2z5p2x5Lqs6YO95bqB!5e0!3m2!1sja!2sjp!4v1707800217058!5m2!1sja!2sjp"
              ></iframe>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
}
