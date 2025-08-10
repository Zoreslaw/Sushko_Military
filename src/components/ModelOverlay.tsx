import { Suspense, lazy, useEffect, useMemo, useState } from 'react';
import { Modal, Drawer, useMantineTheme, Loader, Box, ScrollArea } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

const ModelMK1 = lazy(() => import('../model-details/ModelMK1'));
const ModelMK2 = lazy(() => import('../model-details/ModelMK2'));
const ModelMK3 = lazy(() => import('../model-details/ModelMK3'));

const slugToComponent: Record<string, React.LazyExoticComponent<() => React.ReactElement>> = {
  mk1: ModelMK1,
  mk2: ModelMK2,
  mk3: ModelMK3,
};

const parseSlugFromHash = (hash: string): string | null => {
  if (!hash) return null;
  const match = hash.match(/^#m\/(.+)$/);
  return match ? match[1] : null;
};

const closeOverlay = () => {
  // remove only our m/ segment, preserve other hash parts if any
  if (parseSlugFromHash(window.location.hash)) {
    window.history.pushState('', document.title, window.location.pathname + window.location.search);
    window.dispatchEvent(new HashChangeEvent('hashchange'));
  }
};

const ModelOverlay = () => {
  const theme = useMantineTheme();
  const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.md})`);

  const [slug, setSlug] = useState<string | null>(() => parseSlugFromHash(window.location.hash));
  const Component = useMemo(() => (slug ? slugToComponent[slug] : null), [slug]);

  useEffect(() => {
    const onHashChange = () => setSlug(parseSlugFromHash(window.location.hash));
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const opened = Boolean(Component);

  if (!opened) return null;

  const content = (
    <Suspense fallback={<Box p="xl" style={{ display: 'flex', justifyContent: 'center' }}><Loader color="gold" /></Box>}>
      <ScrollArea.Autosize mah={isMobile ? '100dvh' : '80vh'}>
        {Component ? <Component /> : null}
      </ScrollArea.Autosize>
    </Suspense>
  );

  return isMobile ? (
    <Drawer opened={opened} onClose={closeOverlay} size="100%" padding="md" title={null}>
      {content}
    </Drawer>
  ) : (
    <Modal opened={opened} onClose={closeOverlay} size="80%" padding="md" title={null} centered>
      {content}
    </Modal>
  );
};

export default ModelOverlay;

