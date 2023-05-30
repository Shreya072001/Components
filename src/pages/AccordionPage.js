import Accordion from "../components/Accordion"
function AccordionPage(){  
  const items=[
    {
      id: '7y732',
      label: 'Can I use React on a project?',
      content: 'You can use React on any project you want. You can use React on any project you want.'
    },
    {
      id:'tydt5',
      label: 'Can I use React on a project?',
      content: 'You can use React on any project you want. You can use React on any project you want.'
    },
    {
      id:"hgdvh",
      label: 'Can I use React on a project?',
      content: 'You can use React on any project you want. You can use React on any project you want.'
    },
  ]
return (
 <Accordion items={items}/>
  )
}
export default AccordionPage
