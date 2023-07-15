import { Modal ,Button,Layout,Typography,Row,Image, Divider,Input } from "antd";
import styled from "styled-components";
import { PlusOutlined } from '@ant-design/icons';
const { Title } = Typography;

const { Header } = Layout;
const { Content } = Layout;

export const StyledModal = styled(Modal)`
  .ant-modal-content {
    margin-top: 4rem;
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

//delete modal 
export const ModalButtonYes=styled(Button)`

background-color: rgba(24, 144, 255, 1);
padding-inline: 1.25rem;
color: white;
&:hover {
      color: white !important;
    }
`;

export const ModalButtonNo=styled(Button)`

background-color: transparent;
padding-inline: 1.25rem;
&:hover {
      border:1px solid #d9d9d9;
    }

`;

export const ModalDesc=styled.p`
margin-left:26px;
color: #87888a;

`;

export const ModalTitle=styled.span`
margin-left:10px;

`;

export const ModalRow=styled(Row)`
background-color: #eeeff3;

`;
export const ModalImg=styled(Image)`
margin-bottom: 5px;

`;


//app.js
export const StyledLayout=styled(Layout)`
background-color: white;
`;
export const StyledContent=styled(Content)`
padding-top: 2rem;
padding-bottom: 2rem;
`;

export const DividerTopApp=styled(Divider)`
padding: 0px;
margin: 0px;
margin-bottom: 6px;
`;

export const StyledRowApp=styled(Row)`
padding-top: 0.75rem;
padding-bottom: 0.75rem;
padding-inline: 1.25rem;
`;
export const AddInputimg=styled(Image)`
display: inline-flex;
margin-right: 1rem;
`;

export const InputApp=styled(Input)`
display: inline-flex;
margin-left: 1rem;
width: 200px;
`;
export const DividerBottomApp=styled(Divider)`
padding: 0px;
margin: 0px;
margin-bottom: 2rem;
margin-top: 6px;

          
`;

export const StyledDiv = styled.div`
box-shadow: ${({ isDragging }) =>
  isDragging ? '0 0 5px 2px rgba(0, 0, 0, 0.1)' : 'none'};
${({ draggableProps }) => draggableProps && draggableProps.style};
`;

//dataitem

export const StyledRowDataItem=styled(Row)`
padding: 0px;
margin: 0px;
margin-bottom: 0px;
`; 


export const DividerTopDataItem=styled(Divider)`
padding: 0px;
margin: 0px;
margin-top: 0px;
`;

export const StyledInnerRowDataItem = styled.div`
background-color: white;
border: ${props => (props.isDeleteHovered ? '0.5px solid black' : '0px')};
display: flex;
justify-content: space-between;
align-items: middle;
padding-top: 0.75rem;
padding-bottom: 0.75rem;
padding-inline: 1.25rem;
`;

export const DividerBottomDataItem=styled(Divider)`
padding: 0px;
margin: 0px;
margin-bottom: 0px;
`;

export const EditInput=styled(Input)`
margin-left: 1rem;
width: 75%;
`;

//header
export const HeaderRow=styled(Row)`
position: relative;
height: 100%;
`;
export const HeaderLogo=styled(Image)`
margin-right: 10px;
`