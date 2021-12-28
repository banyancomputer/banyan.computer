import Container from '../components/container'
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'

export default function Home() {
  return (
      <Container>
      <p className="text-4xl text-center mb-64 mt-48">The Alexandria Trust is a <Tippy content="An organization represented by rules encoded in a computer program, owned by its members."><span className="decoration-dotted underline decoration-yellow cursor-help">decentralized autonomous organization</span></Tippy> dedicated to <span className="text-yellow">storing humanity's knowledge forever</span>.</p>
      <h2>Data provenance for the next century.<Tippy content="And beyond?"><sup className="cursor-default">+</sup></Tippy></h2>
      <div className="flex row justify-between mt-16 mb-32">
        <p className="w-full">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dignissim convallis aenean et tortor at risus viverra. Semper auctor neque vitae tempus. Nunc congue nisi vitae suscipit. Porttitor leo a diam sollicitudin tempor id eu nisl nunc. Turpis in eu mi bibendum neque egestas. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Lectus sit amet est placerat in egestas erat imperdiet. Interdum velit laoreet id donec ultrices tincidunt arcu. Nibh cras pulvinar mattis nunc sed blandit libero volutpat. Maecenas sed enim ut sem viverra aliquet. Eget est lorem ipsum dolor sit. Dignissim enim sit amet venenatis urna cursus eget nunc. At lectus urna duis convallis convallis tellus id interdum. Maecenas volutpat blandit aliquam etiam.</p>
        <p className="text-center w-full">Image here.</p>
      </div>
      <h2 className="text-right">An execution in three parts.</h2>
      <div className="mt-16 mb-32 flex row justify-between">
        <p className="text-center w-full">Image here.</p>
        <p className="w-full">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dignissim convallis aenean et tortor at risus viverra. Semper auctor neque vitae tempus. Nunc congue nisi vitae suscipit. Porttitor leo a diam sollicitudin tempor id eu nisl nunc. Turpis in eu mi bibendum neque egestas. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Lectus sit amet est placerat in egestas erat imperdiet. Interdum velit laoreet id donec ultrices tincidunt arcu. Nibh cras pulvinar mattis nunc sed blandit libero volutpat. Maecenas sed enim ut sem viverra aliquet. Eget est lorem ipsum dolor sit. Dignissim enim sit amet venenatis urna cursus eget nunc. At lectus urna duis convallis convallis tellus id interdum. Maecenas volutpat blandit aliquam etiam.</p>
      </div>
      <h2>Created by unusual suspects.</h2>
      <div className="flex row justify-between mt-16 mb-32">
        <p className="w-full">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dignissim convallis aenean et tortor at risus viverra. Semper auctor neque vitae tempus. Nunc congue nisi vitae suscipit. Porttitor leo a diam sollicitudin tempor id eu nisl nunc. Turpis in eu mi bibendum neque egestas. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Lectus sit amet est placerat in egestas erat imperdiet. Interdum velit laoreet id donec ultrices tincidunt arcu. Nibh cras pulvinar mattis nunc sed blandit libero volutpat. Maecenas sed enim ut sem viverra aliquet. Eget est lorem ipsum dolor sit. Dignissim enim sit amet venenatis urna cursus eget nunc. At lectus urna duis convallis convallis tellus id interdum. Maecenas volutpat blandit aliquam etiam.</p>
        <p className="text-center w-full">Image here.</p>
      </div>
      <h2>Invested and partnered.</h2>
      <div className="flex row justify-between my-32">
        <p className="w-full text-center">One</p>
        <p className="w-full text-center">Two</p>
        <p className="w-full text-center">Three</p>
      </div>
      <div className="flex row justify-around items-center my-16">
        <p className="text-2xl font-bold">Feeling left out?</p>
        <button className="inline-block text-2xl font-bold px-8 my-16 border-2 p-4 border-yellow rounded-xl hover:bg-yellow transition">Get in touch</button>
      </div>
      <h2>A community to match.</h2>
      <div className="flex row justify-between my-32">
        <p className="w-full text-center">One</p>
        <p className="w-full text-center">Two</p>
        <p className="w-full text-center">Three</p>
      </div>
      </Container>
  )
}
