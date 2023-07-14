import { Modal ,Button,Layout,Typography } from "antd";
import styled from "styled-components";
import { PlusOutlined } from '@ant-design/icons';
const { Title } = Typography;

const { Header } = Layout;

export const StyledModal = styled(Modal)`
  .ant-modal-content {
    background-color: #eeeff3;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
    border-radius: 0px;
    padding:2rem;
  }
`;
export const StyledHeader=styled(Header)`
background-color: white;
box-shadow:0 2px 4px rgba(151, 151, 151, 1) ;
height: 124px;
margin-bottom: 2rem;
   
`;

export const StyledButton = styled(Button)`
  && {
    position: absolute;
    right: -15px;
    bottom: 0;
    margin-bottom: -30px;
    background-color: #4a475f;
    height: 60px;
    width: 60px;
    &:hover {
      background-color: #3d3a4f !important;
    }
  }
`;

export const StyledPlusOutlined = styled(PlusOutlined)`
  font-size: 18px;
`;

export const StyledTitle = styled(Title)`
  && {
    font-weight: 600;
    margin-bottom: 0;
    color: rgba(66, 66, 66, 1);
  }
`;
export const draggableDiv = styled.div`
  && {
    font-weight: 600;
    margin-bottom: 0;
    color: rgba(66, 66, 66, 1);
  }
`;
export const StyledDiv = styled.div`
box-shadow: ${({ isDragging }) =>
  isDragging ? '0 0 5px 2px rgba(0, 0, 0, 0.1)' : 'none'};
${({ draggableProps }) => draggableProps && draggableProps.style};
`;