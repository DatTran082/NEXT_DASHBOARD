// project import
import Layout from 'layout';
import Page from 'components/Page';
import Landing from 'sections/landing';

export default function HomePage() {
  return (
    <Page title="Landing">
      <Landing />
    </Page>
  );
}

HomePage.getLayout = function getLayout(page) {
  return <Layout variant="landing">{page}</Layout>;
};
