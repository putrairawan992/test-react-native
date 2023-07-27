import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';

import DefaultView from '../../components/DefaultView';
import CouponHeader from '../../components/Header/CouponHeader';
import DefaultText from '../../components/DefaultText';
import Gap from '../../components/Gap';
import CardPromo from '../../components/Card/CardPromo';
import {images} from '../../utils/images';
import CardCoupon from '../../components/Card/CardCoupon';

export default function Coupon() {
  return (
    <DefaultView>
      <CouponHeader />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Gap height={15} />
        <DefaultText
          title="Limited Promo"
          titleClassName="text-base font-inter-bold ml-5"
        />
        <Gap height={10} />
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.promoContainer}>
          <CardPromo
            image={images.productOne}
            title="FREE FLOW"
            subtitle="SPENT WITH MINIMUM PURCHASE
            NT 40.000"
            time="14:10"
          />
          <CardPromo
            image={images.productOne}
            title="FREE FLOW"
            subtitle="SPENT WITH MINIMUM PURCHASE
            NT 40.000"
            time="14:10"
          />
        </ScrollView>

        <Gap height={30} />
        <DefaultText
          title="Inside Omni"
          titleClassName="text-base font-inter-bold ml-5"
        />
        <Gap height={10} />
        <CardCoupon
          type="free"
          title="Free 2 cocktail"
          subtitle="Minimum purchase NT 15.000"
        />
        <CardCoupon
          type="discount"
          title="Discount  50% for ladies"
          subtitle="Entry before 11pm"
          warning="4 hours before promo ended"
        />
        <CardCoupon
          type="discount"
          title="Discount NT 3.000 for any Food"
          subtitle="Entry before 11pm"
        />

        <Gap height={30} />
        <DefaultText
          title="Platform Coupon"
          titleClassName="text-base font-inter-bold ml-5"
        />
        <Gap height={10} />
        <CardCoupon
          type="discount"
          title="Discount NT 3.000 for any Food"
          subtitle="Entry before 11pm"
        />
        <CardCoupon
          type="discount"
          title="Discount NT 3.000 for any Food"
          subtitle="Entry before 11pm"
        />
        <CardCoupon
          type="discount"
          title="Discount NT 3.000 for any Food"
          subtitle="Entry before 11pm"
        />
      </ScrollView>
    </DefaultView>
  );
}

const styles = StyleSheet.create({
  promoContainer: {
    paddingHorizontal: 10,
  },
});
