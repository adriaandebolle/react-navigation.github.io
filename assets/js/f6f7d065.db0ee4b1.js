(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[5123],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return l},kt:function(){return m}});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=a.createContext({}),p=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=p(e.components);return a.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(t),m=o,g=d["".concat(c,".").concat(m)]||d[m]||u[m]||r;return t?a.createElement(g,i(i({ref:n},l),{},{components:t})):a.createElement(g,i({ref:n},l))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=d;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<r;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},38088:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return c},default:function(){return l}});var a=t(74034),o=t(79973),r=(t(67294),t(3905)),i={id:"screen-options-resolution",title:"Screen options with nested navigators",sidebar_label:"Screen options with nested navigators"},s={unversionedId:"screen-options-resolution",id:"version-6.x/screen-options-resolution",isDocsHomePage:!1,title:"Screen options with nested navigators",description:"In this document we'll explain how screen options work when there are multiple navigators. It's important to understand this so that you put your options in the correct place and can properly configure your navigators. If you put them in the wrong place, at best nothing will happen and at worst something confusing and unexpected will happen.",source:"@site/versioned_docs/version-6.x/screen-options-resolution.md",sourceDirName:".",slug:"/screen-options-resolution",permalink:"/docs/6.x/screen-options-resolution",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-6.x/screen-options-resolution.md",version:"6.x",sidebar_label:"Screen options with nested navigators",frontMatter:{id:"screen-options-resolution",title:"Screen options with nested navigators",sidebar_label:"Screen options with nested navigators"},sidebar:"version-6.x/docs",previous:{title:"Opening a full-screen modal",permalink:"/docs/6.x/modal"},next:{title:"Custom Android back button behavior",permalink:"/docs/6.x/custom-android-back-button-handling"}},c=[{value:"Setting parent screen options based on child navigator&#39;s state",id:"setting-parent-screen-options-based-on-child-navigators-state",children:[]}],p={toc:c};function l(e){var n=e.components,t=(0,o.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In this document we'll explain how ",(0,r.kt)("a",{parentName:"p",href:"/docs/6.x/screen-options"},"screen options")," work when there are multiple navigators. It's important to understand this so that you put your ",(0,r.kt)("inlineCode",{parentName:"p"},"options")," in the correct place and can properly configure your navigators. If you put them in the wrong place, at best nothing will happen and at worst something confusing and unexpected will happen."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"You can only modify navigation options for a navigator from one of its screen components. This applies equally to navigators that are nested as screens.")),(0,r.kt)("p",null,"Let's take for example a tab navigator that contains a stack in each tab. What happens if we set the ",(0,r.kt)("inlineCode",{parentName:"p"},"options")," on a screen inside of the stack?"),(0,r.kt)("samp",{id:"stack-in-tab-nav-options"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const Tab = createTabNavigator();\nconst HomeStack = createStackNavigator();\nconst SettingsStack = createStackNavigator();\n\nfunction HomeStackScreen() {\n  return (\n    <HomeStack.Navigator>\n      <HomeStack.Screen\n        name="A"\n        component={A}\n        options={{ tabBarLabel: \'Home!\' }}\n      />\n    </HomeStack.Navigator>\n  );\n}\n\nfunction SettingsStackScreen() {\n  return (\n    <SettingsStack.Navigator>\n      <SettingsStack.Screen\n        name="B"\n        component={B}\n        options={{ tabBarLabel: \'Settings!\' }}\n      />\n    </SettingsStack.Navigator>\n  );\n}\n\nexport default function App() {\n  return (\n    <NavigationContainer>\n      <Tab.Navigator>\n        <Tab.Screen name="Home" component={HomeStackScreen} />\n        <Tab.Screen name="Settings" component={SettingsStackScreen} />\n      </Tab.Navigator>\n    </NavigationContainer>\n  );\n}\n')),(0,r.kt)("p",null,"As we mentioned earlier, you can only modify navigation options for a navigator from one of its screen components. ",(0,r.kt)("inlineCode",{parentName:"p"},"A")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"B")," above are screen components in ",(0,r.kt)("inlineCode",{parentName:"p"},"HomeStack")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"SettingsStack")," respectively, not in the tab navigator. So the result will be that the ",(0,r.kt)("inlineCode",{parentName:"p"},"tabBarLabel")," property is not applied to the tab navigator. We can fix this though!"),(0,r.kt)("samp",{id:"stack-in-tab-nav-options-fixed"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"export default function App() {\n  return (\n    <NavigationContainer>\n      <Tab.Navigator>\n        <Tab.Screen\n          name=\"Home\"\n          component={HomeStackScreen}\n          options={{ tabBarLabel: 'Home!' }}\n        />\n        <Tab.Screen\n          name=\"Settings\"\n          component={SettingsStackScreen}\n          options={{ tabBarLabel: 'Settings!' }}\n        />\n      </Tab.Navigator>\n    </NavigationContainer>\n  );\n}\n")),(0,r.kt)("p",null,"When we set the ",(0,r.kt)("inlineCode",{parentName:"p"},"options")," directly on ",(0,r.kt)("inlineCode",{parentName:"p"},"Screen")," components containing the ",(0,r.kt)("inlineCode",{parentName:"p"},"HomeStack")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"SettingsStack")," component, it allows us to control the options for its parent navigator when its used as a screen component. In this case, the options on our stack components configure the label in the tab navigator that renders the stacks."),(0,r.kt)("h2",{id:"setting-parent-screen-options-based-on-child-navigators-state"},"Setting parent screen options based on child navigator's state"),(0,r.kt)("p",null,"Imagine the following configuration:"),(0,r.kt)("samp",{id:"parent-options-from-child-start"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const Tab = createBottomTabNavigator();\n\nfunction HomeTabs() {\n  return (\n    <Tab.Navigator>\n      <Tab.Screen name="Feed" component={FeedScreen} />\n      <Tab.Screen name="Profile" component={ProfileScreen} />\n      <Tab.Screen name="Account" component={AccountScreen} />\n    </Tab.Navigator>\n  );\n}\n\nconst Stack = createStackNavigator();\n\nexport default function App() {\n  return (\n    <NavigationContainer>\n      <Stack.Navigator>\n        <Stack.Screen name="Home" component={HomeTabs} />\n        <Stack.Screen name="Settings" component={SettingsScreen} />\n      </Stack.Navigator>\n    </NavigationContainer>\n  );\n}\n')),(0,r.kt)("p",null,"If we were to set the ",(0,r.kt)("inlineCode",{parentName:"p"},"headerTitle")," with ",(0,r.kt)("inlineCode",{parentName:"p"},"options")," for the ",(0,r.kt)("inlineCode",{parentName:"p"},"FeedScreen"),", this would not work. This is because ",(0,r.kt)("inlineCode",{parentName:"p"},"App")," stack will only look at its immediate children for configuration: ",(0,r.kt)("inlineCode",{parentName:"p"},"HomeTabs")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"SettingsScreen"),"."),(0,r.kt)("p",null,"But we can determine the ",(0,r.kt)("inlineCode",{parentName:"p"},"headerTitle")," option based on the ",(0,r.kt)("a",{parentName:"p",href:"/docs/6.x/navigation-state"},"navigation state")," of our tab navigator using the ",(0,r.kt)("inlineCode",{parentName:"p"},"getFocusedRouteNameFromRoute")," helper. Let's create a function to get the title first:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { getFocusedRouteNameFromRoute } from '@react-navigation/native';\n\nfunction getHeaderTitle(route) {\n  // If the focused route is not found, we need to assume it's the initial screen\n  // This can happen during if there hasn't been any navigation inside the screen\n  // In our case, it's \"Feed\" as that's the first screen inside the navigator\n  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Feed';\n\n  switch (routeName) {\n    case 'Feed':\n      return 'News feed';\n    case 'Profile':\n      return 'My profile';\n    case 'Account':\n      return 'My account';\n  }\n}\n")),(0,r.kt)("p",null,"Then we can use this function in 2 ways:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Using ",(0,r.kt)("inlineCode",{parentName:"p"},"options")," prop on ",(0,r.kt)("inlineCode",{parentName:"p"},"Screen")," (recommended):"),(0,r.kt)("samp",{id:"parent-options-from-child-opt1"}),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},'<Stack.Screen\n  name="Home"\n  component={HomeTabs}\n  options={({ route }) => ({\n    headerTitle: getHeaderTitle(route),\n  })}\n/>\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Using ",(0,r.kt)("inlineCode",{parentName:"p"},"navigation.setOptions"),":"),(0,r.kt)("samp",{id:"parent-options-from-child-opt2"}),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},'function HomeTabs({ navigation, route }) {\n  React.useLayoutEffect(() => {\n    navigation.setOptions({ headerTitle: getHeaderTitle(route) });\n  }, [navigation, route]);\n\n  return (\n    <Tab.Navigator>\n      <Tab.Screen name="Feed" component={FeedScreen} />\n      <Tab.Screen name="Profile" component={ProfileScreen} />\n      <Tab.Screen name="Account" component={AccountScreen} />\n    </Tab.Navigator>\n  );\n}\n')))),(0,r.kt)("p",null,"So what's happening here? With the ",(0,r.kt)("inlineCode",{parentName:"p"},"getFocusedRouteNameFromRoute")," helper, we can get the currently active route name from this child navigator (in this case it's the tab navigator since that's what we're rendering) and setting an appropriate title for the header."),(0,r.kt)("p",null,"This approach can be used anytime you want to set options for a parent navigator based on a child navigator's state. Common use cases are:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Show tab title in stack header: a stack contains a tab navigator and you want to set the title on the stack header (above example)"),(0,r.kt)("li",{parentName:"ol"},"Show screens without tab bar: a tab navigator contains a stack and you want to hide the tab bar on specific screens (not recommended, see ",(0,r.kt)("a",{parentName:"li",href:"/docs/6.x/hiding-tabbar-in-screens"},"Hiding tab bar in specific screens")," instead)"),(0,r.kt)("li",{parentName:"ol"},"Lock drawer on certain screens: a drawer has a stack inside of it and you want to lock the drawer on certain screens")),(0,r.kt)("p",null,"In many cases, similar behavior can be achieved by reorganizing our navigators. We usually recommend this option if it fits your use case."),(0,r.kt)("p",null,"For example, for the above use case, instead of adding a tab navigator inside a stack navigator, we can add a stack navigator inside each of the tabs."),(0,r.kt)("samp",{id:"reorganized-navigators"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const FeedStack = createStackNavigator();\n\nfunction FeedStackScreen() {\n  return (\n    <FeedStack.Navigator>\n      <FeedStack.Screen name="Feed" component={FeedScreen} />\n      {/* other screens */}\n    </FeedStack.Navigator>\n  );\n}\n\nconst ProfileStack = createStackNavigator();\n\nfunction ProfileStackScreen() {\n  return (\n    <ProfileStack.Navigator>\n      <ProfileStack.Screen name="Profile" component={ProfileScreen} />\n      {/* other screens */}\n    </ProfileStack.Navigator>\n  );\n}\n\nconst Tab = createBottomTabNavigator();\n\nfunction HomeTabs() {\n  return (\n    <Tab.Navigator>\n      <Tab.Screen name="Feed" component={FeedStackScreen} />\n      <Tab.Screen name="Profile" component={ProfileStackScreen} />\n    </Tab.Navigator>\n  );\n}\n\nconst RootStack = createStackNavigator();\n\nexport default function App() {\n  return (\n    <NavigationContainer>\n      <RootStack.Navigator>\n        <RootStack.Screen name="Home" component={HomeTabs} />\n        <RootStack.Screen name="Settings" component={SettingsScreen} />\n      </RootStack.Navigator>\n    </NavigationContainer>\n  );\n}\n')),(0,r.kt)("p",null,"Additionally, this lets you push new screens to the feed and profile stacks without hiding the tab bar by adding more routes to those stacks."),(0,r.kt)("p",null,"If you want to push screens on top of the tab bar (i.e. that don't show the tab bar), then you can add them to the ",(0,r.kt)("inlineCode",{parentName:"p"},"App")," stack instead of adding them into the screens inside the tab navigator."))}l.isMDXComponent=!0}}]);