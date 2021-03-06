import React from 'react';
import {mount} from 'enzyme';

import OrganizationEventsV2 from 'app/views/organizationEventsV2';

describe('OrganizationEventsV2', function() {
  it('renders', function() {
    const wrapper = mount(
      <OrganizationEventsV2 organization={TestStubs.Organization()} />,
      TestStubs.routerContext()
    );
    const content = wrapper.find('PageContent');
    expect(content.text()).toContain('Events');
  });
});
