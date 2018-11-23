import React from 'react';
import { Spinner, SpinnerSize } from 'office-ui-fabric-react/lib/Spinner';
import CommonHeader from 'common/lib/components/Header';

export interface IProps {
  solutionName?: string;

  goBack?: () => void;
  refresh?: () => void;
  hardRefresh: () => void;
}

const Header = ({ solutionName, goBack, refresh, hardRefresh }: IProps) => {
  const items = [
    {
      hidden: !goBack,
      key: 'go-back',
      iconProps: { iconName: 'Back' },
      onClick: goBack,
    },
    {
      key: 'title',
      text: solutionName || '',
      onRenderIcon: (props, defaultRender) => {
        return solutionName ? null : (
          <Spinner size={SpinnerSize.small} style={{ padding: '.1rem' }} />
        );
      },

      onClick: refresh,
    },
  ];

  const farItems = [
    {
      key: 'overflow',
      iconProps: { iconName: 'Refresh' },
      subMenuProps: {
        items: [
          {
            key: 'refresh-snippet',
            iconProps: { iconName: 'Refresh' },
            text: 'Refresh',
            onClick: refresh,
          },
          {
            key: 'hard-refresh',
            iconProps: { iconName: 'Refresh' },
            text: 'Hard Refresh',
            onClick: hardRefresh,
          },
        ],
      },
    },
  ];

  return <CommonHeader items={items} farItems={farItems} />;
};

export default Header;
