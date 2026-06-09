import type { StateProps } from "../../../../interfaces/interface";
import { aboutPageTranslation } from "../../../../utils/translations/aboutPage";
import DeliverySVG from "../../icons/DeliveryIcon";
import HeadphonesSVG from "../../icons/Headphones";
import SecureSVG from "../../icons/Secure";
import Card from "../Card";

function MergedCards({state}:StateProps) {
    const t =
      aboutPageTranslation[state.lang as keyof typeof aboutPageTranslation];
  return (
    <div className="flex justify-between">
      <Card
        variant="none"
        headingText={t.features.freeAndFastDelivery}
        titleText={t.features.customerService24_7}
      >
        <DeliverySVG />
      </Card>
      <Card
        variant="none"
        headingText={t.statistics.customersActiveSite}
        titleText={t.features.supportNote}
      >
        <HeadphonesSVG />
      </Card>
      <Card
        variant="none"
        headingText={t.features.moneyBackGuarantee}
        titleText={t.features.refundNote}
      >
        <SecureSVG />
      </Card>
    </div>
  );
}
export default MergedCards