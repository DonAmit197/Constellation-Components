import { useEffect, useState, useRef } from 'react';
import { withConfiguration, Card } from '@pega/cosmos-react-core';
import type { PConnFieldProps } from './PConnProps';
import { MainCard, StyledButton } from './styles';

export {};
// interface for props
interface AreteansExtensionsCardWithUrlProps extends PConnFieldProps {
  // If any, enter additional props that only exist on TextInput here
  cardMinWidth?: string;
  dataPage: string;
  getPConnect: any;
}
interface WorklistItem {
  appName: string;
  header: string;
  icon: string;
  desc: string;
  url: string;
  isActive: string;
  id: string;
}
interface CardElementProps {
  item: WorklistItem;
}

const CardElement: React.FC<CardElementProps> = ({ item }) => {
  useEffect(() => {
    const btnElem = document.querySelector('.AD-card-container');
    if (btnElem) {
      const topParent = btnElem?.parentNode?.parentNode;
      console.log(topParent);
    }
    console.log(btnElem);
  }, []);
  return (
    <StyledButton
      className='AD-card-container'
      onClick={e => {
        e.preventDefault();
        window.open(item.url, '_blank');
      }}
    >
      <div className='application-name'>{item.appName}</div>
      <div className='content-area'>
        <div className='application-icon'>
          <img src={`data:image/svg+xml;base64,${item.icon}`} alt={item.appName} />
        </div>
        <h2>{item.header}</h2>
        <p>{item.desc}</p>
      </div>
    </StyledButton>
  );
};

// props passed in combination of props from property panel (config.json) and run time props from Constellation
// any default values in config.pros should be set in defaultProps at bottom of this file
function AreteansExtensionsCardWithUrl(props: AreteansExtensionsCardWithUrlProps) {
  const { getPConnect, dataPage, cardMinWidth = '400px' } = props;
  const [worklist, setWorklist] = useState<WorklistItem[]>([]);
  // const [isLoading, setIsLoading] = useState(true);
  const PConnect = getPConnect();
  const dataViewName = dataPage;
  const context = PConnect.getContextName();

  useEffect(() => {
    if (dataViewName) {
      PCore.getDataApiUtils()
        .getData(dataViewName, {}, context)
        // @ts-ignore
        .then((response: any) => {
          console.log('Response', response);
          if (response.data.data !== null) {
            // table requires an index or will get setExtraStackFrame error
            setWorklist(
              response.data.data.map((entry: any, index: number) => {
                // mapping the data into the column names
                // MUST have an id/index or will get a setExtraStackFrame error
                // put a key in the table
                return {
                  header: entry.Header,
                  appName: entry.Name,
                  desc: entry.Description,
                  icon: entry.IconSource,
                  url: entry.URL,
                  id: index
                };
              })
            );
          } else {
            setWorklist([]);
          }
        })
        .catch((error: any) => {
          setWorklist([]);
          console.log(error);
        });
    }
  }, [context, dataViewName]);

  const linkRef = useRef(null);
  useEffect(() => {
    console.log('show', linkRef);
    if (linkRef.current) {
      console.log('show', linkRef.current);
    }
  }, []);

  return (
    <MainCard minWidth={cardMinWidth} rendering='horizontal'>
      {Array.from(worklist).map(item => {
        console.log('Item', item);
        return (
          <Card key={item.id}>
            <CardElement item={item} />
          </Card>
        );
      })}
      {console.log(worklist)}
    </MainCard>
  );
}

export default withConfiguration(AreteansExtensionsCardWithUrl);
