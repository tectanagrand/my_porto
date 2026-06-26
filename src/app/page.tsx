import TerminalTabContainer from './components/container/TerminalTabContainer';
import Education from './pages/Education';
import Hero from './pages/Hero';
import Skills from './pages/Skills';

export default function Home() {
  return (
    <main className="w-full px-4 md:px-10 flex flex-col items-center justify-items-center h-dvh">
      <TerminalTabContainer>
        <Hero />
        <Skills />
        <Education />
      </TerminalTabContainer>
    </main>
  );
}
