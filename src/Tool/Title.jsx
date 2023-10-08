import { Icon } from '@iconify/react';
export default function Title(pros){
  return <div className="w-[100%] h-[12vw] flex justify-between items-center p-[2vw] box-border ">
  <span className="text-=[#374d5b] text-[4vw] flex items-center">
    {pros.children}
  <span className=" w-4 h-4"><Icon icon="mingcute:right-line" /></span>
  </span>
  <span className=" inline-block w-4 h-6"><Icon className="w-[100%] h-[100%]" icon="mingcute:more-2-fill" /></span>
</div>
}