import {TouchableOpacity, View} from 'react-native';
import React, {createRef, useState} from 'react';
import PagerView from 'react-native-pager-view';

import DefaultView from '../../components/DefaultView';
import DefaultHeader from '../../components/Header/DefaultHeader';
import DefaultText from '../../components/DefaultText';
import Gap from '../../components/Gap';
import NotificationApps from './NotificationApps';
import NotificationInvitation from './NotificationInvitation';
import NotificationBill from './NotificationBill';
import NotificationFriends from './NotificationFriends';

export default function Notification() {
  const [menu] = useState<string[]>(['Apps', 'Invitation', 'Bill', 'Friends']);
  const [initialPage, setInitialPage] = useState<number>(0);

  const ref = createRef<PagerView>();

  return (
    <DefaultView>
      <DefaultHeader title="Notification" />
      <Gap height={5} />
      <View className="flex-row">
        {menu.map((item, index) => {
          return (
            <TouchableOpacity
              onPress={() => ref.current?.setPage(index)}
              activeOpacity={0.7}
              key={item}
              className={`flex-1 py-3 border-b-[1px] ${
                index === initialPage
                  ? 'border-b-secondary'
                  : 'border-b-transparent'
              }`}>
              <DefaultText
                title={item}
                titleClassName={`text-center font-inter-medium ${
                  index === initialPage ? 'text-secondary' : 'text-white'
                }`}
              />
            </TouchableOpacity>
          );
        })}
      </View>

      <PagerView
        className="flex-1"
        initialPage={initialPage}
        ref={ref}
        onPageSelected={e => setInitialPage(e.nativeEvent.position)}>
        <View key="1">
          <NotificationApps />
        </View>
        <View key="2">
          <NotificationInvitation />
        </View>
        <View key="3">
          <NotificationBill />
        </View>
        <View key="4">
          <NotificationFriends />
        </View>
      </PagerView>
    </DefaultView>
  );
}
