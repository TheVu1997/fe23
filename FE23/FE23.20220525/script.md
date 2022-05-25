# Transfering Properties & state

## Sửa bài tập

## Transfering Properties

- Các ứng dụng của spreading Operation
  - Sao chép mảng
  - Kết hợp 1 hay nhiều mảng
  - Sử dụng mảng như danh sách các argument
  - Thêm item vào 1 list
  - Thao tác với state trong react
  - kết hợp các object
  - Chuyển nodelist thành 1 array

- Lưu ý khi sử dụng spreading operator
  - So sánh sao chép mảng bằng phương thức gán và phương thức spreading operator

- Nêu vấn đề:
  - Trong nhiều trường hợp chúng ta phải truyền nhưng props giống hệt như nhau qua nhiều components
  - Cách cũ: truyền lần lượt từng props
  - Cách mới dùng Spreading

## Dealing with state in React

- Giới thiệu về vòng đời của component trong react
  - Mounting
    - constructor
    - getDerivedStateFromProps
    - render
    - componentDidMount
  - Updating
    - getDerivedStateFromProps
    - shouldComponentUpdate
    - render
    - getSnapshotBeforeUpdate
    - componentDidUpdate
  - Unmounting
    - componentWillUnmount
