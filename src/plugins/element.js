import Vue from 'vue'
import {
  Button,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Form,
  FormItem,
  Input,
  Table,
  TableColumn,
  Notification,
  Message
} from 'element-ui'

Vue.use(Button)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Table)
Vue.use(TableColumn)

Vue.prototype.$notify = Notification
Vue.prototype.$message = Message
