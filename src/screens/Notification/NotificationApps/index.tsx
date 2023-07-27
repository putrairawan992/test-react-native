import {ScrollView} from 'react-native';
import React from 'react';

import CardNotificationApps from '../../../components/Card/CardNotificationApps';
import DefaultText from '../../../components/DefaultText';
import Gap from '../../../components/Gap';

export default function NotificationApps() {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Gap height={20} />
      <DefaultText
        title="Today"
        titleClassName="mx-8 text-base font-inter-bold"
      />
      <CardNotificationApps
        image="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60"
        text="Wave confirmed your order for Group Walk in Ticket. Check your my event page for get your ticket"
        time="30h ago"
      />
      <CardNotificationApps
        image="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60"
        text="Wave confirmed your order for Group Walk in Ticket. Check your my event page for get your ticket"
        time="30h ago"
        showBorder={false}
      />

      <Gap height={20} />
      <DefaultText
        title="Yesterday"
        titleClassName="mx-8 text-base font-inter-bold"
      />
      <CardNotificationApps
        image="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60"
        text="Wave confirmed your order for Group Walk in Ticket. Check your my event page for get your ticket"
        time="30h ago"
      />
      <CardNotificationApps
        image="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60"
        text="Wave confirmed your order for Group Walk in Ticket. Check your my event page for get your ticket"
        time="30h ago"
        showBorder={false}
      />
    </ScrollView>
  );
}
