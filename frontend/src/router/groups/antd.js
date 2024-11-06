import AntDesignHome from '../../components/AntDesign';
import Buttons from '../../components/AntDesign/general/Buttons';
import FloatButtons from '../../components/AntDesign/general/FloatButtons';
import Icons from '../../components/AntDesign/general/Icons';
import Typographies from '../../components/AntDesign/general/Typographies';
import AutoCompletes from '../../components/AntDesign/AutoCompletes';
import Cascaders from '../../components/AntDesign/Cascaders';
import Checkboxes from '../../components/AntDesign/Checkboxes';
import DatePickers from '../../components/AntDesign/DatePickers';
import Forms from '../../components/AntDesign/Forms';
import Inputs from '../../components/AntDesign/Inputs';

export default {
  path: "/antd",
  element: <AntDesignHome />,
  children: [
    {
      path: "buttons",
      element: <Buttons />,
    },
    {
      path: "float-buttons",
      element: <FloatButtons />,
    },
    {
      path: "icons",
      element: <Icons />,
    },
    {
      path: "typographies",
      element: <Typographies />,
    },
    {
      path: "auto-completes",
      element: <AutoCompletes />,
    },
    {
      path: "cascaders",
      element: <Cascaders />,
    },
    {
      path: "checkboxes",
      element: <Checkboxes />,
    },
    {
      path: "date-pickers",
      element: <DatePickers />,
    },
    {
      path: "forms",
      element: <Forms />,
    },
    {
      path: "inputs",
      element: <Inputs />,
    },
  ],
};
