// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  Deck,
  Heading,
  Slide,
  Text,
  Link,
  CodePane,
  Appear,
  List,
  ListItem
} from 'spectacle';

import CodeSlide from 'spectacle-code-slide';
import ImageSlide from './ImageSlide';

// Import image preloader util
import preloader from 'spectacle/lib/utils/preloader';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');
require('spectacle/lib/themes/default/index.css');
require('./style.css');

const images = {
  logoAdfab: require('../assets/logo_adfab.png'),
  logo: require('../assets/logo.svg'),
  photo: require('../assets/now-coworking-crop.jpg'),
  // angular: require('../assets/angular.png'),
  // backbone: require('../assets/backbone.png'),
  // ember: require('../assets/ember.png'),
  // technos: require('../assets/technos.png'),
  // vdom: require('../assets/vdom.png'),
  // vdomInception: require('../assets/vdom_inception.jpg'),
  // webpack: require('../assets/webpack.gif'),
  // hnpwa: require('../assets/hnpwa.png'),
  // xbox: require('../assets/xbox.png'),
  // tests: require('../assets/tests.jpg'),
  cordova: require('../assets/cordova.png'),
  ionic: require('../assets/ionic.png'),
  xamarin: require('../assets/xamarin.svg'),
  weex: require('../assets/weex.svg'),
  nativescript: require('../assets/nativescript.png'),
  eric: require('../assets/eric.gif'),
  // fiber: require('../assets/fiber.png'),
  javascriptcore: require('../assets/javascriptcore.png'),
  // ssr: require('../assets/ssr.png'),
  // flux: require('../assets/flux.png'),
  // redux: require('../assets/redux.png'),
  // reduxStructure: require('../assets/redux-structure.jpg'),
  // snap: require('../assets/snap.png'),
  reactToRN: require('../assets/react-to-rn.jpg'),
  bridge: require('../assets/bridge.jpg'),
  coeuraveclesmains: require('../assets/coeuraveclesmains.gif'),
  // codeStyleClassic: require('../assets/codeStyleClassic.jpg'),
  rnJealous: require('../assets/rn-jealous.jpg'),
  rnDebugger: require('../assets/rnDebugger.jpg'),
  flutter: require('../assets/flutter.png'),
  kotlin: require('../assets/kotlin.png'),
  swift: require('../assets/swift.png'),
  react16Migration: require('../assets/react16-migration.png'),
  rnComponentsList: require('../assets/rn-components-list.png'),
  rnComponentsListResult: require('../assets/rn-components-list-result.png'),
  datepickerIos: require('../assets/datepicker-ios.jpg'),
  datepickerAndroid: require('../assets/datepicker-android.png'),
  crashlytics: require('../assets/crashlytics.png')
};

preloader(images);

const theme = createTheme(
  {
    primary: 'black',
    secondary: 'yellow',
    // secondary: "white",
    tertiary: 'white'
  },
  {
    primary: 'Helvetica neue',
    secondary: 'Helvetica'
  }
);

const slideProps = {
  padding: 0,
  transition: ['fade'],
  bgColor: 'primary'
};

const headingProps = {
  size: 5,
  caps: true,
  textColor: 'secondary',
  fontWeight: 'light'
};

export default class Presentation extends React.Component {
  state = {
    color: 'black'
  };

  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
      >
        <Slide {...slideProps}>
          <Heading {...headingProps}>React Native</Heading>
        </Slide>
        <Slide {...slideProps}>
          <img src={images.photo} className="portrait" />
          <Text textColor="secondary">Pierre-Alexandre Dupuy</Text>
          <Text textColor="secondary">@padupuy</Text>
        </Slide>

        <Slide {...slideProps}>
          <img src={images.logoAdfab} />
          <Heading {...headingProps}>Adfab</Heading>
        </Slide>

        <Slide {...slideProps}>
          <img src={images.logo} className="App-logo" alt="logo" />
          <List>
            <Appear>
              <ListItem>Qualif</ListItem>
            </Appear>
            <Appear>
              <ListItem>Warm up</ListItem>
            </Appear>
            <Appear>
              <ListItem>Sous le capot</ListItem>
            </Appear>
            <Appear>
              <ListItem>Grille de départ</ListItem>
            </Appear>
            <Appear>
              <ListItem>Prépa Moteur</ListItem>
            </Appear>
            <Appear>
              <ListItem>Safety car</ListItem>
            </Appear>
            <Appear>
              <ListItem>Pit stop</ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide {...slideProps}>
          <Heading {...headingProps}>Qualif</Heading>
        </Slide>
        <Slide {...slideProps}>
          <img className="techno" src={images.cordova} />
          <img className="techno" src={images.ionic} />
          <img className="techno" src={images.swift} />
          <img className="techno" src={images.kotlin} />
          <Text textColor="secondary">Hybrid apps VS Native apps</Text>
          <Link href="https://dev.to/kayis/the-mobile-app-spectrum">
            https://dev.to/kayis/the-mobile-app-spectrum
          </Link>
        </Slide>
        <Slide {...slideProps}>
          <Heading {...headingProps}>Pourquoi pas du hybride ?</Heading>
          <List>
            <ListItem>Webview : Manipulation du DOM</ListItem>
            <ListItem>Temps de latence : onTouch pas réactif</ListItem>
            <ListItem>UX Android VS iOS</ListItem>
          </List>
        </Slide>
        <Slide {...slideProps}>
          <Heading {...headingProps}>Pourquoi pas du natif ?</Heading>
          <List>
            <ListItem>Cout de développement</ListItem>
            <ListItem>Temps de développement</ListItem>
            <ListItem>Ressources rares et chères</ListItem>
            <ListItem>Dette technique plus importante</ListItem>
          </List>
        </Slide>
        <Slide {...slideProps}>
          <Heading {...headingProps}>Concurrents</Heading>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <img src={images.nativescript} />
            <img src={images.xamarin} height="136" />
            <img src={images.weex} />
            <img src={images.flutter} />
          </div>
          <List>
            <ListItem>NativeScript : Telerik / Google - Angular JS</ListItem>
            <ListItem>Xamarin : Microsoft - c#</ListItem>
            <ListItem>Weex : Alibaba / Taobao - Vue JS</ListItem>
            <ListItem>Flutter : Google - Dart JS</ListItem>
          </List>
        </Slide>
        <Slide {...slideProps}>
          <Heading {...headingProps}>Powered by React Native</Heading>
          <List>
            <ListItem>Facebook</ListItem>
            <ListItem>Instagram</ListItem>
            <ListItem>Skype</ListItem>
            <ListItem>Airbnb</ListItem>
            <ListItem>Wix</ListItem>
          </List>
          <Text textColor="secondary">
            React Native - Made by Facebook - 2015
          </Text>
        </Slide>
        <Slide {...slideProps}>
          <Text textColor="secondary">
            Compatibilité garantie de sa librairie avec les versions
            précédentes.
          </Text>
          <img src={images.react16Migration} />
          <Link href="https://code.facebook.com/posts/1716776591680069/react-16-a-look-inside-an-api-compatible-rewrite-of-our-frontend-ui-library/">
            https://code.facebook.com/
          </Link>
        </Slide>

        <Slide {...slideProps}>
          <Heading {...headingProps}>Warm up</Heading>
        </Slide>
        <Slide {...slideProps}>
          <Text textColor="secondary">
            Si vous maîtrisez déjà React, <br />vous savez coder en React Native
          </Text>
          <Appear>
            <img src={images.reactToRN} />
          </Appear>
        </Slide>
        <Slide {...slideProps}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <img src={images.rnComponentsList} height={600} />
            <img src={images.rnComponentsListResult} height={600} />
          </div>
        </Slide>
        <Slide {...slideProps}>
          <CodePane
            lang="jsx"
            source={require('raw-loader!../assets/imports.example')}
            margin="20px auto"
          />
        </Slide>
        <Slide {...slideProps}>
          <Heading {...headingProps}>Switch iOS / Android</Heading>
          <Text textColor="secondary">Solution 1</Text>
          <CodePane
            lang="jsx"
            source={require('raw-loader!../assets/switch.example')}
            margin="20px auto"
          />
        </Slide>
        <Slide {...slideProps}>
          <Text textColor="secondary">Solution 2</Text>
          <CodePane
            lang="jsx"
            source={require('raw-loader!../assets/switch222.example')}
            margin="20px"
            maxWidth={500}
          />
        </Slide>
        <Slide {...slideProps}>
          <CodePane
            lang="jsx"
            source={require('raw-loader!../assets/switch2.example')}
            margin="20px"
            maxWidth={500}
          />
          <CodePane
            lang="jsx"
            source={require('raw-loader!../assets/switch22.example')}
            margin="20px"
            maxWidth={500}
          />
        </Slide>
        <Slide {...slideProps}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <img src={images.datepickerIos} height={600} />
            <img src={images.datepickerAndroid} height={600} />
          </div>
        </Slide>
        <Slide {...slideProps}>
          <Heading {...headingProps}>UX</Heading>
          <List>
            <ListItem>ScrollView - rebound, pull to refresh</ListItem>
            <ListItem>
              Input - keyboardType, autoCorrect, returnKeyType, blurOnSubmit,
              onSubmitEditing
            </ListItem>
            <ListItem>
              Button - Highlight, Opacity, Ripple effect, hitSlop
            </ListItem>
          </List>
        </Slide>
        <Slide {...slideProps}>
          <Heading {...headingProps}>Options incluses de base</Heading>
          <List>
            <Appear>
              <ListItem>Hot / Live reload</ListItem>
            </Appear>
            <Appear>
              <ListItem>Temps de développement court</ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <Text textColor="secondary">~85% de code en commun</Text>
                <Link href="https://www.quora.com/How-much-will-you-be-able-to-share-code-between-Android-and-iOS-with-React-Native">
                  How-much-will-you-be-able-to-share-code-between-Android-and-iOS
                </Link>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <Text textColor="secondary">Communauté</Text>
                <Link href="https://www.facebook.com/groups/react.native.community/">
                  https://www.facebook.com/groups/react.native.community/
                </Link>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <Text textColor="secondary">Conférence</Text>
                <Link href="https://react-native.eu/">React-Native.eu</Link>
              </ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide {...slideProps}>
          <Heading {...headingProps}>Sous le capot</Heading>
        </Slide>
        <Slide {...slideProps}>
          <img src={images.bridge} />
          <Link href="https://speakerdeck.com/ncuillery/how-to-react-native">
            https://speakerdeck.com/ncuillery/how-to-react-native
          </Link>
        </Slide>
        <Slide {...slideProps}>
          <Heading {...headingProps}>JavaScriptCore - Android</Heading>
          <img src={images.javascriptcore} />
          <Link href="https://blog.expo.io/modernizing-js-bundles-for-react-native-with-babili-late-2016-f625e754ab94">
            https://blog.expo.io/modernizing-js-bundles-for-react-native-with-babili-late-2016-f625e754ab94
          </Link>
        </Slide>
        <Slide {...slideProps}>
          <Heading {...headingProps}>Made by Facebook</Heading>
          <List>
            <ListItem>
              Yoga : cross-platform layout engine = flex everywhere
            </ListItem>
            <ListItem>
              Fresco : Android library for managing images and the memory they
              use
            </ListItem>
          </List>
        </Slide>
        <Slide {...slideProps}>
          <img src={images.rnJealous} />
        </Slide>
        <Slide {...slideProps}>
          <Heading {...headingProps}>Native Modules</Heading>
          <List>
            <ListItem>Alert, AsyncStorage : API standardisée</ListItem>
            <ListItem>
              SegmentedControlIOS, ViewPagerAndroid : Mono plateforme
            </ListItem>
            <ListItem>
              API identique entre les modules fournis par FB et les modules
              tiers
            </ListItem>
          </List>
        </Slide>
        <Slide {...slideProps}>
          <Heading {...headingProps}>Plugin : JS & Natif</Heading>
          <List>
            <ListItem>Navigation</ListItem>
            <ListItem>Lottie</ListItem>
            <ListItem>Quick Actions</ListItem>
            <ListItem>AR : Réalité augmentée</ListItem>
          </List>
        </Slide>

        <Slide {...slideProps}>
          <Heading {...headingProps}>Grille de départ</Heading>
        </Slide>
        <Slide {...slideProps}>
          <List>
            <ListItem>react-native init</ListItem>
            <ListItem>Expo / https://snack.expo.io</ListItem>
            <ListItem>Ignite</ListItem>
            <ListItem>Generator rn toolbox</ListItem>
            <ListItem>https://reactnativeseed.com/thank-you/351</ListItem>
          </List>
        </Slide>

        <Slide {...slideProps}>
          <Heading {...headingProps}>Safety car</Heading>
        </Slide>
        <Slide {...slideProps}>
          <List>
            <ListItem>Debug with Chrome dev tools</ListItem>
            <ListItem>MessageQueue.spy(true) / RNSnoopy</ListItem>
            <ListItem>adb logcat</ListItem>
            <ListItem>RN bundle visualizer</ListItem>
          </List>
        </Slide>
        <Slide {...slideProps}>
          <Text textColor="secondary">RN Debugger</Text>
          <img src={images.rnDebugger} height={600} />
        </Slide>
        <Slide {...slideProps}>
          <ImageSlide image={images.rnDebugger} />
        </Slide>
        <Slide {...slideProps}>
          <Heading {...headingProps}>Error/Crash reporters</Heading>
          <Text textColor="secondary">ComponentDidCatch</Text>
          <Text textColor="secondary">Sentry / Crashlytics</Text>
          <img src={images.crashlytics} height={600} />
        </Slide>
        <Slide {...slideProps}>
          <Text textColor="secondary">Detox</Text>
        </Slide>

        <Slide {...slideProps}>
          <Heading {...headingProps}>Prépa Moteur</Heading>
        </Slide>
        <Slide {...slideProps}>
          <List>
            <ListItem>
              <Text textColor="secondary">console.log</Text>
              <Link href="https://facebook.github.io/react-native/docs/performance.html#using-console-log-statements">
                When running a bundled app, these statements can cause a big
                bottleneck in the JavaScript thread. This includes calls from
                debugging libraries such as redux-logger, so make sure to remove
                them before bundling.
              </Link>
            </ListItem>
            <ListItem>
              <Text textColor="secondary">CSS Caching</Text>
              <Link href="http://facebook.github.io/react-native/releases/0.48/docs/stylesheet.html">
                Making a stylesheet from a style object makes it possible to
                refer to it by ID instead of creating a new style object every
                time.
              </Link>
            </ListItem>
            <ListItem>
              Offloading animations =&gt; useNativeDriver: true
            </ListItem>
            <ListItem>requestAnimationFrame</ListItem>
            <ListItem>InteractionManager.runAfterInteractions()</ListItem>
            <ListItem>scrollEventThrottle: 1</ListItem>
            <ListItem>
              <Link href="http://bit.ly/2t8JHqm">
                How to reduce a react native app size & startup time
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://speakerdeck.com/talkol/going-over-the-speed-limit-synchronous-rendering-in-react-native">
                Going Over The Speed Limit - Synchronous Rendering in React
                Native
              </Link>
            </ListItem>
          </List>
        </Slide>
        <Slide {...slideProps}>
          <Heading {...headingProps}>Bridge</Heading>
          <img src={images.coeuraveclesmains} />
          <List>
            <ListItem>Bridge surchargé = ralentissement de l'App</ListItem>
            <ListItem>Bridge en bonne santé = app en bonne santé</ListItem>
          </List>
        </Slide>
        <Slide {...slideProps}>
          <List>
            <ListItem>
              Encore pas mal de bug (layout, overflow, zIndex) mais il y a une
              nouvelle release chaque mois, on guette à chaque fois la release
              note avec attention
            </ListItem>
            <Appear>
              <ListItem>
                Mise à jour délicate mais les devs ont toujours de supers idées
                https://github.com/ncuillery/rn-diff
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Gros débat sur la navigation mais des solutions performantes
                existent
              </ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide {...slideProps}>
          <Heading {...headingProps}>Pit Stop</Heading>
          <Link href="https://www.youtube.com/watch?v=aHSUp7msCIE">
            Ferrari F1 Pit Stop Perfection
          </Link>
          <List>
            <ListItem>Code Push</ListItem>
          </List>
        </Slide>
        <Slide {...slideProps}>
          <Heading {...headingProps}>Bonus</Heading>
          <List>
            <ListItem>Utiliser un mac</ListItem>
            <ListItem>Utiliser des composants natifs</ListItem>
            <ListItem>Tester plusieurs librairies</ListItem>
            <ListItem>Temps développement ios ≠ android</ListItem>
            <ListItem>Développer en même temps sous android et ios</ListItem>
            <ListItem>Tester au fur et à mesure sur des vrais devices</ListItem>
            <ListItem>Tester les perf avec des versions packagées</ListItem>
          </List>
        </Slide>
        <Slide {...slideProps}>
          <Heading {...headingProps}>Merci</Heading>
          <img src={images.eric} />
        </Slide>
      </Deck>
    );
  }
}
