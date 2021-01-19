import Vue from 'vue'
import {
  Card,
  Button,
  Dialog,
  Form,
  FormItem,
  Input,
  Image,
  Icon,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Row,
  Col,
  Pagination,
  Message,
  MessageBox
} from 'element-ui'

Vue.use(Card)
Vue.use(Button)
Vue.use(Dialog)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Image)
Vue.use(Icon)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Row)
Vue.use(Col)
Vue.use(Pagination)

Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$message = Message
