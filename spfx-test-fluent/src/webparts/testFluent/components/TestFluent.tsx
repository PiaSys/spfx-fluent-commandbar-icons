import * as React from 'react';
import styles from './TestFluent.module.scss';
import { ITestFluentProps } from './ITestFluentProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { CommandBar, ICommandBarItemProps } from 'office-ui-fabric-react/lib/CommandBar';
import { IButtonProps } from 'office-ui-fabric-react/lib/Button';

const _commandBarItems: ICommandBarItemProps[] = [
  {
    key: 'newItem',
    text: "New",
    iconProps: { iconName: 'Add' },
    onClick: () => console.log('newItem')
  },
  {
    key: 'delete',
    text: "Delete",
    iconProps: { iconName: 'Delete' },
    onClick: () => console.log('delete')
  },
  {
    key: 'submit',
    text: "Submit",
    iconProps: { iconName: 'Send' },
    onClick: () => console.log('submit'),
  }
];

export default class TestFluent extends React.Component<ITestFluentProps, {}> {
  public render(): React.ReactElement<ITestFluentProps> {
    return (
      <div className={ styles.testFluent }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <CommandBar
                items={_commandBarItems}
                ariaLabel="Use left and right arrow keys to navigate between commands"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
