import { Button } from '@/components/ui/button';

const Page = () => {
  return (
    <div className="p-4 space-y-4 flex flex-col max-w-[200px]">
      <Button> Default </Button>
      <Button variant={"primary"}> Primary </Button>
      <Button variant={"primaryOutline"}> Primary Outline </Button>
      <Button variant={"secondary"}> Secondary </Button>
      <Button variant={"secondaryOutline"}> Secondary Outline </Button>
      <Button variant={"danger"}> Danger </Button>
      <Button variant={"dangerOutline"}> Danger Outline </Button>
      <Button variant={"super"}> Danger </Button>
      <Button variant={"superOutline"}> Danger Outline </Button>
      <Button variant={"ghost"}> Danger </Button>
      <Button variant={"sidebar"}> sidebar </Button>
      <Button variant={"sidebarOutline"}> sidebarOutline </Button>
 
    </div>
  );
};
export default Page;
