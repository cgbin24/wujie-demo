// vue3 通过定义一个指令，来实现拖拽功能
import { Directive, DirectiveBinding } from 'vue'

interface DragableHTMLElement extends HTMLElement {
  onmousedown?: (e: MouseEvent) => void
  onmousemove?: (e: MouseEvent) => void
  onmouseup?: (e: MouseEvent) => void
}

interface DragableEvent extends Event {
  clientX: number
  clientY: number
}

const dragableDirective: Directive = {
  mounted(el: DragableHTMLElement, binding: DirectiveBinding) {
    el.style.position = 'absolute'
    el.style.left = binding.value.left + 'px'
    el.style.top = binding.value.top + 'px'

    const dragable = binding.value.dragable
    if (dragable) {
      el.onmousedown = (e: DragableEvent) => {
        const disX = e.clientX - el.offsetLeft
        const disY = e.clientY - el.offsetTop

        el.onmousemove = (e: DragableEvent) => {
          const left = e.clientX - disX
          const top = e.clientY - disY
          el.style.left = left + 'px'
          el.style.top = top + 'px'
        }

        el.onmouseup = () => {
          el.onmousemove = null
          el.onmouseup = null
        }
      }
    }
  }
}

export default dragableDirective
