<script type="text/javascript">
const textElement = document.getElementById('writing') 
const optionButtons = document.getElementById('choices')

let reveal = {}

function start() {
    reveal = {}
    show(1)
}
function select(option) {

}
function show(textNodeIndex) {
const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
textElement.innerText = textNode.text
}






const textNodes = [
{
    id: 1,
    text: 'You wake up',
    options: [
   {
    text: 'pick up the sword of fate',
    setState: { sword: true},
    nextText: 2
   },
   {
    text: 'deny your destiny',
    nextText: 2
   } 
  ]
 },
 {
    id:2
 }
]

start()
</script>