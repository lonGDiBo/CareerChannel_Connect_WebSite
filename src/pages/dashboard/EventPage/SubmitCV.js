<Card
            style={{
              margin: '10px 0',
              padding: '0px 20px 20px 20px',
            }}
          >
            <h3
              style={{
                color: 'red',
                fontSize: '1.8rem',
              }}
            >
              Đăng ký ngay
            </h3>
            <div
              style={{
                height: '1px',
                backgroundColor: 'black',
                opacity: '20%',
              }}
            >
              .
            </div>
            <Card
              style={{
                margin: '10px 0',
                padding: '0px 20px 20px 20px',
              }}
            >
              <h3>
                Họ tên{' '}
                <span
                  style={{
                    color: 'red',
                  }}
                >
                  *
                </span>
              </h3>
              <TextField id="outlined-password-input" sx={{ m: 0, width: '100%' }} label="Tên của bạn" />
            </Card>
            <Card
              style={{
                margin: '10px 0',
                padding: '0px 20px 20px 20px',
              }}
            >
              <h3>
                Email{' '}
                <span
                  style={{
                    color: 'red',
                  }}
                >
                  *
                </span>
              </h3>
              <TextField id="outlined-password-input" sx={{ m: 0, width: '100%' }} label="Email của bạn" />
            </Card>

            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}
            >
              <Card
                style={{
                  width: '32%',
                  margin: '10px 0',
                  padding: '0px 20px 20px 20px',
                }}
              >
                <h3>
                  Vị trí tuyển dụng{' '}
                  <span
                    style={{
                      color: 'red',
                    }}
                  >
                    *
                  </span>
                </h3>
                <CompleteInput
                  title="Chọn vị trí ..."
                  data={[
                    {
                      label: 'React',
                    },
                    {
                      label: 'Java',
                    },
                    {
                      label: 'Ruby',
                    },
                    {
                      label: 'Android',
                    },
                  ]}
                />
              </Card>

              <Card
                style={{
                  width: '32%',
                  margin: '10px 0',
                  padding: '0px 20px 20px 20px',
                }}
              >
                <h3>
                  Cấp bậc{' '}
                  <span
                    style={{
                      color: 'red',
                    }}
                  >
                    *
                  </span>
                </h3>
                <CompleteInput
                  title="Chọn cấp ..."
                  data={[
                    {
                      label: 'Thực tập sinh',
                    },
                    {
                      label: 'Java',
                    },
                    {
                      label: 'Ruby',
                    },
                    {
                      label: 'Android',
                    },
                  ]}
                />
              </Card>

              <Card
                style={{
                  width: '32%',
                  margin: '10px 0',
                  padding: '0px 20px 20px 20px',
                }}
              >
                <h3>
                  Giới tính{' '}
                  <span
                    style={{
                      color: 'red',
                    }}
                  >
                    *
                  </span>
                </h3>
                <CompleteInput
                  title="Chọn giới tính ..."
                  data={[
                    {
                      label: 'Nam',
                    },
                    {
                      label: 'Nữ',
                    },
                    {
                      label: 'Khác',
                    },
                  ]}
                />
              </Card>
            </div>

            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}
            >
              <Card
                style={{
                  width: '32%',
                  margin: '10px 0',
                  padding: '0px 20px 20px 20px',
                }}
              >
                <h3>
                  Số điện thoại{' '}
                  <span
                    style={{
                      color: 'red',
                    }}
                  >
                    *
                  </span>
                </h3>
                <TextField id="outlined-password-input" sx={{ m: 0, width: '100%' }} label="SĐT của bạn" />
              </Card>

              <Card
                style={{
                  width: '66%',
                  margin: '10px 0',
                  padding: '0px 20px 20px 20px',
                }}
              >
                <h3>
                  Địa chỉ{' '}
                  <span
                    style={{
                      color: 'red',
                    }}
                  >
                    *
                  </span>
                </h3>
                <TextField id="outlined-password-input" sx={{ m: 0, width: '100%' }} label="Địa chỉ của bạn" />
              </Card>
            </div>

            <Card
              style={{
                margin: '10px 0',
                padding: '0px 20px 20px 20px',
              }}
            >
              <h3>
                Kỹ năng{' '}
                <span
                  style={{
                    color: 'red',
                  }}
                >
                  *
                </span>
              </h3>
              <TextField id="outlined-password-input" sx={{ m: 0, width: '100%' }} label="Kỹ năng của bạn" />
            </Card>

            <Card
              style={{
                margin: '10px 0',
                padding: '0px 20px 20px 20px',
              }}
            >
              <h3>
                Học vấn{' '}
                <span
                  style={{
                    color: 'red',
                  }}
                >
                  *
                </span>
              </h3>
              <TextField id="outlined-password-input" sx={{ m: 0, width: '100%' }} label="Học vấn của bạn" />
            </Card>

            <Card
              style={{
                margin: '10px 0',
                padding: '0px 20px 20px 20px',
              }}
            >
              <h3>
                Chứng chỉ{' '}
                <span
                  style={{
                    color: 'red',
                  }}
                >
                  *
                </span>
              </h3>
              <TextField id="outlined-password-input" sx={{ m: 0, width: '100%' }} label="Chứng chỉ của bạn" />
            </Card>

            <Card
              style={{
                margin: '10px 0',
                padding: '0px 20px 20px 20px',
              }}
            >
              <h3>
                Danh hiệu và giải thưởng{' '}
                <span
                  style={{
                    color: 'red',
                  }}
                >
                  *
                </span>
              </h3>
              <TextField
                id="outlined-password-input"
                sx={{ m: 0, width: '100%' }}
                label="Danh hiệu và giải thưởng của bạn"
              />
            </Card>

            <Card
              style={{
                margin: '10px 0',
                padding: '0px 20px 20px 20px',
              }}
            >
              <h3>
                Tải CV{' '}
                <span
                  style={{
                    color: 'red',
                  }}
                >
                  *
                </span>
              </h3>
              <TextField id="outlined-password-input" sx={{ m: 0, width: '100%' }} label="CV của bạn" />
            </Card>

            <Button
              style={{
                borderRadius: '80px',
                padding: '1% 2%',
                fontSize: '1.2rem',
                backgroundColor: '#0C4876',
                width: '20%',
                margin: '',
              }}
              variant="contained"
            >
              Lưu
            </Button>
          </Card>