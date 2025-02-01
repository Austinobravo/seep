"use client"
import { Edit, Trash2 } from 'lucide-react'
import React from 'react'
import AdminNav from '../_components/AdminNav'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogClose
  } from "@/components/ui/dialog"
import { Button } from '@/components/ui/button'
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
  } from "@/components/ui/drawer"
import { useMediaQuery } from '@/hooks/use-media-query'
import PrivacyAndTermsForm from './_components/PrivacyAndTermsForm'

const page = () => {
      const isDesktop = useMediaQuery("(min-width: 768px)")
      const [ isOpen, setIsOpen] = React.useState(false)
    
  return (
    <section >
        <div className='flex gap-10 md:flex-nowrap flex-wrap'>
            <div>
                <div className='flex justify-between items-center py-3'>
                    <h3 className='font-bold text-xl'>Privacy Policy</h3>
                    {isDesktop ?
                    <Dialog>
                        <DialogTrigger asChild>
                        <Button type='button'>Create privacy policy</Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-3xl max-h-[550px] overflow-y-auto no-scrollbar">
                        <DialogHeader>
                            <DialogTitle>Create Privacy policy</DialogTitle>
                            <DialogDescription></DialogDescription>
                        </DialogHeader>
                            <PrivacyAndTermsForm/>
                        </DialogContent>
                        
                    </Dialog>
                        :
                        <Drawer>
                        <DrawerTrigger asChild>
                        <Button type='button'>Create privacy policy</Button>
                            
                        </DrawerTrigger>
                        <DrawerContent className="p-3 overflow-y-auto no-scrollbar max-h-[400px] ">
                            <div className="z-[51]">
                            <DrawerHeader className="!text-center">
                            <DrawerTitle>Create Privacy policy</DrawerTitle>
                            <DrawerDescription>
                           
                            </DrawerDescription>
                            </DrawerHeader>
                            <PrivacyAndTermsForm/>
                            <DrawerFooter className="pt-2">
                            </DrawerFooter>

                            </div>
                        </DrawerContent>
                        </Drawer>
                        }
                   

                </div>

                <div className='bg-blue-100 rounded-lg p-3 text-sm shadow space-y-10'>
                    <p className='line-clamp-6'>
                        <span>
                            Lorem ipsum dolor sit amet consectetur. Turpis auctor tincidunt ullamcorper aliquam vitae sed ultricies erat. Vestibulum cum curabitur praesent urna. Potenti feugiat maecenas quisque convallis eu imperdiet. Ac porttitor risus pulvinar id erat. Leo sit nulla ac magnis. Vel magna tincidunt in nibh felis viverra elit vel. Velit aliquam leo risus amet proin eu fermentum sapien. Et urna eget neque etiam morbi sed ut felis. Sed amet potenti feugiat mauris dictum tellus elit luctus at. Tortor sagittis id viverra vel tincidunt lorem eget sem a. Nibh urna risus velit congue nec eleifend enim. Varius viverra varius sagittis arcu. Etiam sit hendrerit adipiscing gravida.
                            Pellentesque convallis mi risus interdum. Ac non vestibulum nibh fermentum mattis. Condimentum dolor amet ac fringilla arcu. Sollicitudin risus lacus vulputate sollicitudin neque eget eget eu. Tristique feugiat semper duis ultricies vulputate. Facilisi luctus amet eget lectus at. Parturient dignissim sollicitudin magna sit tortor massa. Egestas aliquam augue sollicitudin ultrices non pellentesque ut ligula. Varius gravida viverra tellus ultricies amet nibh tellus et. Augue feugiat vitae dui nunc sapien viverra elementum orci. Velit rhoncus neque ut fermentum. Molestie ut diam morbi cursus. Eros purus egestas mi consequat rutrum sit fames. Risus lectus in lorem pharetra elit pretium sit. Convallis egestas tempus magna lobortis egestas nibh at risus non.
                            Viverra curabitur et ut eget feugiat. Sem nibh ultrices ac scelerisque. In cras quis feugiat sed fames nunc est in. Non cras adipiscing et elementum cursus malesuada tellus non. Fusce eu odio lacus sodales sem massa bibendum eget. Leo turpis id vitae aliquam. Massa turpis maecenas et est.
                            Pellentesque tincidunt a purus purus elementum. Et placerat natoque netus cursus amet sit neque orci at. Vitae pellentesque sodales vitae augue scelerisque duis tortor turpis auctor. Vitae nibh vulputate sed ut non massa. Enim eu elementum in amet.
                            Elementum fringilla venenatis nisl consequat sodales. Tortor eget diam nam gravida rhoncus eget interdum ultricies risus. Odio fusce aliquet cursus nulla in pretium aenean. Sapien magna at etiam amet. Fringilla ut interdum augue volutpat aliquam mi pharetra gravida at. Quam feugiat purus a suspendisse volutpat phasellus. Arcu nisi tristique id venenatis maecenas sagittis cras justo blandit. Eu a donec tellus viverra ut at enim auctor pellentesque.
                            Blandit lorem augue turpis velit. Ac in luctus habitant nibh a netus dolor. Massa eros aenean facilisis pharetra cras massa nam volutpat. Dictum sit aliquam et nulla tellus semper. Augue consectetur vitae pharetra tristique platea enim. Imperdiet risus arcu eget netus. Interdum risus dignissim platea sagittis amet quis a. Enim commodo ridiculus leo est. Elementum natoque pharetra leo tincidunt viverra massa adipiscing. Lacus a mattis gravida eget nibh dolor ornare ac. Diam feugiat mattis pharetra feugiat sed ut pharetra tortor.
                            Id bibendum quam diam ornare sed semper lectus at purus. Semper et diam pretium scelerisque eget. Ut dictum lacus vitae laoreet tincidunt laoreet natoque ac. Hac varius felis sagittis diam semper. Quis neque ultricies aliquet lacus. Nisi nulla felis amet magna. Id suspendisse eget aenean enim. Sed et id in nulla faucibus mauris. Leo eget et hendrerit bibendum vulputate odio dignissim vitae vitae. Pharetra ligula sed lorem dolor. Elit molestie viverra eros mi. Dapibus est bibendum a vulputate malesuada ut nunc feugiat.
                            Cum id in nec bibendum volutpat id. Nisl enim urna et arcu venenatis tellus arcu sollicitudin. Eget fringilla orci in facilisi id consequat quis sit. Ligula dignissim amet tristique elementum rhoncus. Venenatis magna in ultrices dictum. Justo in nam commodo vel ultricies pulvinar et faucibus. Tortor felis sed pretium ultrices. In magna sed commodo in ornare posuere. Quis facilisi ornare eleifend posuere senectus at senectus morbi eget. Massa enim nulla a lacus amet magna vehicula viverra interdum. Eros nunc id felis nec sit feugiat. Vel vel sed vulputate ornare vitae. Eu eget blandit donec eget morbi.
                            Ut eget natoque habitant enim fermentum blandit aenean est. Natoque maecenas feugiat id massa nam vitae. Adipiscing viverra dui consectetur placerat diam faucibus at. Quis amet sed phasellus molestie tincidunt euismod elementum curabitur. Dictum pellentesque amet mollis cras bibendum libero senectus. Sapien nunc ante in vitae egestas erat. Maecenas lectus ut convallis ac enim diam ullamcorper eget viverra. Ultricies ut tellus elementum tempus quis. Elementum sagittis id proin amet nulla vehicula mattis.
                            Sed nunc aliquet eu at non commodo porttitor tortor in. Est nulla quam aenean aliquam tellus ac tincidunt odio quis. Adipiscing condimentum blandit congue id cras at nunc odio etiam. Eget nisl tincidunt bibendum non iaculis dignissim libero congue. Egestas mauris amet eget pellentesque.
                            Lorem amet pharetra sollicitudin montes neque magna porttitor turpis. Quisque turpis mattis nulla morbi. Et vitae magna nibh elit. Quis etiam tristique risus non.

                        </span>
                    </p>
                    <div className='flex ml-auto w-fit items-center gap-2'>
                    <Edit className='seep-text-color size-6 cursor-pointer'/>
                    <Dialog>
                        <DialogTrigger asChild>
                            <Trash2 className='text-red-500 size-6 cursor-pointer'/>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-sm max-h-[550px] overflow-y-auto">
                        <DialogHeader>
                            <DialogTitle>Delete this?</DialogTitle>
                            <DialogDescription>
                            This is a permanent action. Are you sure?
                            </DialogDescription>
                        </DialogHeader>
                        <div className='flex gap-5 w-fit ml-auto'>
                            <DialogClose>
                                Cancel
                            </DialogClose>
                            <Button type='button' variant={'destructive'} className='border-0'>Delete</Button>

                        </div>
                        </DialogContent>
                        
                    </Dialog>
                    {isDesktop ?
                    <Dialog>
                        <DialogTrigger asChild>
                        
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-3xl max-h-[550px] overflow-y-auto no-scrollbar">
                        <DialogHeader>
                            <DialogTitle>Create Privacy policy</DialogTitle>
                            <DialogDescription></DialogDescription>
                        </DialogHeader>
                            <PrivacyAndTermsForm/>
                        </DialogContent>
                        
                    </Dialog>
                        :
                        <Drawer>
                        <DrawerTrigger asChild>
                        
                        </DrawerTrigger>
                        <DrawerContent className="p-3 overflow-y-auto no-scrollbar max-h-[400px] ">
                            <div className="z-[51]">
                            <DrawerHeader className="!text-center">
                            <DrawerTitle>Create Privacy policy</DrawerTitle>
                            <DrawerDescription>
                           
                            </DrawerDescription>
                            </DrawerHeader>
                            <PrivacyAndTermsForm/>
                            <DrawerFooter className="pt-2">
                            </DrawerFooter>

                            </div>
                        </DrawerContent>
                        </Drawer>
                        }
                   

                    </div>
                </div>
            </div>
            <div >
                <div className='flex justify-between items-center py-3'>
                    <h3 className='font-bold text-xl'>Terms & Conditions</h3>
                    <Button type='button'>Create T & C's</Button>

                </div>
                <div className='bg-blue-100 rounded-lg p-3 text-sm shadow space-y-10'>
                    <p className='line-clamp-6'>
                        <span>
                            Lorem ipsum dolor sit amet consectetur. Turpis auctor tincidunt ullamcorper aliquam vitae sed ultricies erat. Vestibulum cum curabitur praesent urna. Potenti feugiat maecenas quisque convallis eu imperdiet. Ac porttitor risus pulvinar id erat. Leo sit nulla ac magnis. Vel magna tincidunt in nibh felis viverra elit vel. Velit aliquam leo risus amet proin eu fermentum sapien. Et urna eget neque etiam morbi sed ut felis. Sed amet potenti feugiat mauris dictum tellus elit luctus at. Tortor sagittis id viverra vel tincidunt lorem eget sem a. Nibh urna risus velit congue nec eleifend enim. Varius viverra varius sagittis arcu. Etiam sit hendrerit adipiscing gravida.
                            Pellentesque convallis mi risus interdum. Ac non vestibulum nibh fermentum mattis. Condimentum dolor amet ac fringilla arcu. Sollicitudin risus lacus vulputate sollicitudin neque eget eget eu. Tristique feugiat semper duis ultricies vulputate. Facilisi luctus amet eget lectus at. Parturient dignissim sollicitudin magna sit tortor massa. Egestas aliquam augue sollicitudin ultrices non pellentesque ut ligula. Varius gravida viverra tellus ultricies amet nibh tellus et. Augue feugiat vitae dui nunc sapien viverra elementum orci. Velit rhoncus neque ut fermentum. Molestie ut diam morbi cursus. Eros purus egestas mi consequat rutrum sit fames. Risus lectus in lorem pharetra elit pretium sit. Convallis egestas tempus magna lobortis egestas nibh at risus non.
                            Viverra curabitur et ut eget feugiat. Sem nibh ultrices ac scelerisque. In cras quis feugiat sed fames nunc est in. Non cras adipiscing et elementum cursus malesuada tellus non. Fusce eu odio lacus sodales sem massa bibendum eget. Leo turpis id vitae aliquam. Massa turpis maecenas et est.
                            Pellentesque tincidunt a purus purus elementum. Et placerat natoque netus cursus amet sit neque orci at. Vitae pellentesque sodales vitae augue scelerisque duis tortor turpis auctor. Vitae nibh vulputate sed ut non massa. Enim eu elementum in amet.
                            Elementum fringilla venenatis nisl consequat sodales. Tortor eget diam nam gravida rhoncus eget interdum ultricies risus. Odio fusce aliquet cursus nulla in pretium aenean. Sapien magna at etiam amet. Fringilla ut interdum augue volutpat aliquam mi pharetra gravida at. Quam feugiat purus a suspendisse volutpat phasellus. Arcu nisi tristique id venenatis maecenas sagittis cras justo blandit. Eu a donec tellus viverra ut at enim auctor pellentesque.
                            Blandit lorem augue turpis velit. Ac in luctus habitant nibh a netus dolor. Massa eros aenean facilisis pharetra cras massa nam volutpat. Dictum sit aliquam et nulla tellus semper. Augue consectetur vitae pharetra tristique platea enim. Imperdiet risus arcu eget netus. Interdum risus dignissim platea sagittis amet quis a. Enim commodo ridiculus leo est. Elementum natoque pharetra leo tincidunt viverra massa adipiscing. Lacus a mattis gravida eget nibh dolor ornare ac. Diam feugiat mattis pharetra feugiat sed ut pharetra tortor.
                            Id bibendum quam diam ornare sed semper lectus at purus. Semper et diam pretium scelerisque eget. Ut dictum lacus vitae laoreet tincidunt laoreet natoque ac. Hac varius felis sagittis diam semper. Quis neque ultricies aliquet lacus. Nisi nulla felis amet magna. Id suspendisse eget aenean enim. Sed et id in nulla faucibus mauris. Leo eget et hendrerit bibendum vulputate odio dignissim vitae vitae. Pharetra ligula sed lorem dolor. Elit molestie viverra eros mi. Dapibus est bibendum a vulputate malesuada ut nunc feugiat.
                            Cum id in nec bibendum volutpat id. Nisl enim urna et arcu venenatis tellus arcu sollicitudin. Eget fringilla orci in facilisi id consequat quis sit. Ligula dignissim amet tristique elementum rhoncus. Venenatis magna in ultrices dictum. Justo in nam commodo vel ultricies pulvinar et faucibus. Tortor felis sed pretium ultrices. In magna sed commodo in ornare posuere. Quis facilisi ornare eleifend posuere senectus at senectus morbi eget. Massa enim nulla a lacus amet magna vehicula viverra interdum. Eros nunc id felis nec sit feugiat. Vel vel sed vulputate ornare vitae. Eu eget blandit donec eget morbi.
                            Ut eget natoque habitant enim fermentum blandit aenean est. Natoque maecenas feugiat id massa nam vitae. Adipiscing viverra dui consectetur placerat diam faucibus at. Quis amet sed phasellus molestie tincidunt euismod elementum curabitur. Dictum pellentesque amet mollis cras bibendum libero senectus. Sapien nunc ante in vitae egestas erat. Maecenas lectus ut convallis ac enim diam ullamcorper eget viverra. Ultricies ut tellus elementum tempus quis. Elementum sagittis id proin amet nulla vehicula mattis.
                            Sed nunc aliquet eu at non commodo porttitor tortor in. Est nulla quam aenean aliquam tellus ac tincidunt odio quis. Adipiscing condimentum blandit congue id cras at nunc odio etiam. Eget nisl tincidunt bibendum non iaculis dignissim libero congue. Egestas mauris amet eget pellentesque.
                            Lorem amet pharetra sollicitudin montes neque magna porttitor turpis. Quisque turpis mattis nulla morbi. Et vitae magna nibh elit. Quis etiam tristique risus non.

                        </span>
                    </p>

                    <div className='flex ml-auto w-fit items-center gap-2'>
                    <Edit className='seep-text-color size-6 cursor-pointer'/>
                    <Dialog>
                        <DialogTrigger asChild>
                            <Trash2 className='text-red-500 size-6 cursor-pointer'/>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-sm max-h-[550px] overflow-y-auto">
                        <DialogHeader>
                            <DialogTitle>Delete this?</DialogTitle>
                            <DialogDescription>
                            This is a permanent action. Are you sure?
                            </DialogDescription>
                        </DialogHeader>
                        <div className='flex gap-5 w-fit ml-auto'>
                            <DialogClose>
                                Cancel
                            </DialogClose>
                            <Button type='button' variant={'destructive'} className='border-0'>Delete</Button>

                        </div>
                        </DialogContent>
                        
                    </Dialog>
                    </div>
                </div>
            </div>

        </div>
        
      
    </section>
  )
}

export default page
